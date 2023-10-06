import type { StrapiResponse } from '@interfaces/strapi';
import type Social from '@interfaces/strapi/Social';
import type { ISocial } from '@interfaces/ISocial';

import socialData from '@data/social';

import { unpackResponse } from '@helpers/strapi/unpack';

import { createApi } from '@reduxjs/toolkit/query/react';

import baseQuery from './baseQuery';

export const socialApi = createApi({
  reducerPath: 'socialApi',
  baseQuery,
  endpoints: (builder) => ({
    getSocial: builder.query<ISocial, void>({
      query: () => 'social',
      transformResponse(response: StrapiResponse<Social>): ISocial {
        let data = unpackResponse(response);

        if (Array.isArray(data)) {
          data = data[0];
        }

        if (data.instagramUrl) {
          socialData.instagram.url = data.instagramUrl;
        }

        if (data.facebookUrl) {
          socialData.facebook.url = data.facebookUrl;
        }

        if (data.telegramUrl) {
          socialData.telegram.url = data.telegramUrl;
        }

        return socialData as ISocial;
      },
    }),
  }),
});

export const { useGetSocialQuery } = socialApi;
