import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiBaseUrls } from 'app.models';

export const translateAPI = createApi({
   reducerPath: 'translateAPI',
   baseQuery: fetchBaseQuery({ baseUrl: ApiBaseUrls.translate }),
   endpoints: (builder) => ({
      getTranslatedWord: builder.mutation({
         query: ({ body }) => ({
            url: `translate`,
            body,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
         }),
      }),
   }),
});

export const { useGetTranslatedWordMutation } = translateAPI;
