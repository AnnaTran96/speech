import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiBaseUrls } from 'app/app.models';

const API_KEY = process.env.REACT_APP_API_KEY;

export const voiceApi = createApi({
   reducerPath: 'voiceApi',
   baseQuery: fetchBaseQuery({ baseUrl: ApiBaseUrls.voice }),
   endpoints: (builder) => ({
      getAudio: builder.query({
         query: ({ language, voice, word }) =>
            `?key=${API_KEY}&hl=${language}&v=${voice}&src=${word}`,
      }),
   }),
});

export const { useGetAudioQuery } = voiceApi;
