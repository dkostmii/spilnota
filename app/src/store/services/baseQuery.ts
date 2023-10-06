import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
});

export default baseQuery;
