import type { StrapiResponse } from '@interfaces/strapi';
import { Indexed } from '@helpers/strapi/unpack';

import type { ISupport, ISupportCollection } from '@interfaces/ISupport';
import type { SupportItem, SupportCategory, UnpackedSupportItem } from '@interfaces/strapi/Support';

import { unpackResponse, unpackData } from '@helpers/strapi/unpack';

import qs from 'qs';
import { createApi } from '@reduxjs/toolkit/query/react';

import baseQuery from './baseQuery';

function mapSupportItem(supportItem: Indexed<SupportItem> | Indexed<UnpackedSupportItem>): ISupport {
  const { id, title, url, order } = supportItem;
  return { id, title, url, order };
}

function mapSupportCategory(supportCategory: Indexed<SupportCategory>): ISupportCollection {
  const { id, title, order } = supportCategory;
  return { id, title, order, items: [] };
}

const query = qs.stringify(
  {
    populate: ['support_category'],
    pagination: {
      page: 1,
      pageSize: 100,
    },
  },
  { encodeValuesOnly: true }
);

export const supportApi = createApi({
  reducerPath: 'supportApi',
  baseQuery,
  endpoints: (builder) => ({
    getSupportItems: builder.query<(ISupport | ISupportCollection)[], void>({
      query: () => `support-items?${query}`,
      transformResponse(response: StrapiResponse<SupportItem>): (ISupport | ISupportCollection)[] {
        let data = unpackResponse(response);

        if (!Array.isArray(data)) {
          data = [data];
        }

        const unpackedData: Indexed<UnpackedSupportItem>[] = [];

        for (const d of data) {
          const unpackedItem: Indexed<UnpackedSupportItem> = { ...d, support_category: null };

          if (d.support_category.data) {
            unpackedItem.support_category = unpackData(d.support_category.data);
          }

          unpackedData.push(unpackedItem);
        }

        const supportItems: ISupport[] = [];
        const supportCollections: ISupportCollection[] = [];

        for (const d of unpackedData) {
          const { support_category } = d;

          if (support_category === null) {
            supportItems.push(mapSupportItem(d));
          } else {
            const existingCollection = supportCollections.find((c) => c.id === support_category.id);

            if (!existingCollection) {
              const newSupportCollection = mapSupportCategory(support_category);
              newSupportCollection.items.push(mapSupportItem(d));

              supportCollections.push(newSupportCollection);
            } else {
              existingCollection.items.push(mapSupportItem(d));
            }
          }
        }

        return [...supportItems, ...supportCollections];
      },
    }),
  }),
});

export const { useGetSupportItemsQuery } = supportApi;
