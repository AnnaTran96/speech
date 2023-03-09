import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TranslateRequest, TranslateResponse } from 'app/app.interfaces';
import { ApiBaseUrls } from 'app/app.models';

export const translateAPI = createApi({
   reducerPath: 'translateAPI',
   baseQuery: fetchBaseQuery({ baseUrl: ApiBaseUrls.translate }),
   endpoints: (builder) => ({
      getTranslatedWord: builder.mutation<TranslateResponse, TranslateRequest>({
         query: ({ q, source, target }) => ({
            url: `translate`,
            method: 'POST',
            body: {
               q,
               source,
               target,
               api_key: '',
            },
            headers: { 'Content-Type': 'application/json' },
         }),
      }),
   }),
});

export const { useGetTranslatedWordMutation } = translateAPI;
