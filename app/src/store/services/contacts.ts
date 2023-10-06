import type { StrapiResponse } from '@interfaces/strapi';
import type IContacts from '@interfaces/IContacts';
import { unpackResponse } from '@helpers/strapi/unpack';

import { createApi } from '@reduxjs/toolkit/query/react';

import baseQuery from './baseQuery';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery,
  endpoints: (builder) => ({
    getContacts: builder.query<IContacts, void>({
      query: () => 'contact',
      transformResponse(response: StrapiResponse<IContacts>): IContacts {
        const data = unpackResponse(response);

        if (Array.isArray(data)) {
          return data[0];
        }

        return data;
      },
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;
