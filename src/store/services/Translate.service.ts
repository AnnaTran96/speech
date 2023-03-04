import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiBaseUrls } from 'app.models';

const API_KEY = process.env.REACT_APP_API_KEY;

export const translateApi = createApi({
	reducerPath: 'translateApi',
	baseQuery: fetchBaseQuery({ baseUrl: ApiBaseUrls.translate }),
	endpoints: (builder) => ({
		getTranslatedWord: builder.query({
			query: ({ language, voice, word }) =>
				`?key=${API_KEY}&hl=${language}&v=${voice}&src=${word}`,
		}),
	}),
});

export const { useGetTranslatedWordQuery } = translateApi;
