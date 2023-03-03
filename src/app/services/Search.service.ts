import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Search } from 'app.interfaces';
import { ApiBaseUrls } from 'app.models';

type SearchResponse = Search[];

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: ApiBaseUrls.search }),
  endpoints: (builder) => ({
    getSearchWord: builder.query<SearchResponse, string>({
      query: (word) => `entries/en/${word}`,
    }),
  }),
});

export const { useGetSearchWordQuery, useLazyGetSearchWordQuery } = searchApi;
