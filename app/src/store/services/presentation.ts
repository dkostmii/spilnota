import type { StrapiResponse } from '@interfaces/strapi';
import type IPresentation from '@interfaces/IPresentation';
import type Presentation from '@interfaces/strapi/Presentation';
import { unpackResponse, unpackMedia } from '@helpers/strapi/unpack';

import { createApi } from '@reduxjs/toolkit/query/react';

import qs from 'qs';
import baseQuery from './baseQuery';

const query = qs.stringify(
  {
    populate: ['becomePartner'],
  },
  { encodeValuesOnly: true }
);

export const presentationApi = createApi({
  reducerPath: 'presentationApi',
  baseQuery,
  endpoints: (builder) => ({
    getBecomePartnerPresentation: builder.query<IPresentation, void>({
      query: () => `presentation?${query}`,
      transformResponse(response: StrapiResponse<Presentation>): IPresentation {
        let data = unpackResponse(response);

        if (Array.isArray(data)) {
          data = data[0];
        }

        return { ...data, file: unpackMedia(data.becomePartner) };
      },
    }),
  }),
});

export const { useGetBecomePartnerPresentationQuery } = presentationApi;
