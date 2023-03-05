import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { searchApi } from 'store/services/Search.service';
import { translateAPI } from 'store/services/Translate.service';
import { voiceApi } from 'store/services/Voice.service';

const middlewares = [
   searchApi.middleware,
   voiceApi.middleware,
   translateAPI.middleware,
];

export const store = configureStore({
   reducer: {
      [searchApi.reducerPath]: searchApi.reducer,
      [voiceApi.reducerPath]: voiceApi.reducer,
      [translateAPI.reducerPath]: translateAPI.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
});

setupListeners(store.dispatch);

export type State = ReturnType<typeof store.getState>;
