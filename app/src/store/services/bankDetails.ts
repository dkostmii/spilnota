import type { StrapiResponse } from '@interfaces/strapi';
import type IBankDetails from '@interfaces/IBankDetails';
import { unpackResponse } from '@helpers/strapi/unpack';

import { createApi } from '@reduxjs/toolkit/query/react';

import baseQuery from './baseQuery';

export const bankDetailsApi = createApi({
  reducerPath: 'bankDetailsApi',
  baseQuery,
  endpoints: (builder) => ({
    getBankDetails: builder.query<IBankDetails, void>({
      query: () => 'bank-detail',
      transformResponse(response: StrapiResponse<IBankDetails>): IBankDetails {
        const data = unpackResponse(response);

        if (Array.isArray(data)) {
          return data[0];
        }

        return data;
      },
    }),
  }),
});

export const { useGetBankDetailsQuery } = bankDetailsApi;
