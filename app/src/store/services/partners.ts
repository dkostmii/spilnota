import type { StrapiResponse } from '@interfaces/strapi';
import type IPartner from '@interfaces/IPartner';
import type Partner from '@interfaces/strapi/Partner';

import { unpackResponse, unpackMedia } from '@helpers/strapi/unpack';

import qs from 'qs';
import { createApi } from '@reduxjs/toolkit/query/react';

import baseQuery from './baseQuery';

const query = qs.stringify(
  {
    populate: ['logo'],
    pagination: {
      page: 1,
      pageSize: 100,
    },
  },
  { encodeValuesOnly: true }
);

export const partnersApi = createApi({
  reducerPath: 'partnersApi',
  baseQuery,
  endpoints: (builder) => ({
    getPartners: builder.query<IPartner[], void>({
      query: () => `partners?${query}`,
      transformResponse(response: StrapiResponse<Partner>): IPartner[] {
        let data = unpackResponse(response);

        if (!Array.isArray(data)) {
          data = [data];
        }

        return data.map((d) => ({ ...d, logo: unpackMedia(d.logo) }));
      },
    }),
  }),
});

export const { useGetPartnersQuery } = partnersApi;
