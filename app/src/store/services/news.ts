import type { StrapiResponse } from '@interfaces/strapi';
import type INews from '@interfaces/INews';
import type News from '@interfaces/strapi/News';

import { unpackResponse, unpackMedia } from '@helpers/strapi/unpack';

import qs from 'qs';
import { createApi } from '@reduxjs/toolkit/query/react';

import baseQuery from './baseQuery';

const query = qs.stringify(
  {
    populate: ['photo'],
    pagination: {
      page: 1,
      pageSize: 100,
    },
  },
  { encodeValuesOnly: true }
);

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery,
  endpoints: (builder) => ({
    getNews: builder.query<INews[], void>({
      query: () => `news?${query}`,
      transformResponse(response: StrapiResponse<News>): INews[] {
        let data = unpackResponse(response);

        if (!Array.isArray(data)) {
          data = [data];
        }

        return data.map((d) => ({
          ...d,
          photo: unpackMedia(d.photo),
        }));
      },
    }),
    getNewsArticle: builder.query<INews, string>({
      query: (id: string) => `news/${id}?${query}`,
      transformResponse(response: StrapiResponse<News>): INews {
        let data = unpackResponse(response);

        if (Array.isArray(data)) {
          data = data[0];
        }

        return { ...data, photo: unpackMedia(data.photo) };
      },
    }),
  }),
});

export const { useGetNewsQuery, useGetNewsArticleQuery } = newsApi;
// ...
