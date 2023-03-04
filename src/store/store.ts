import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { searchApi } from 'store/services/Search.service';
import { translateApi } from 'store/services/Translate.service';

const middlewares = [searchApi.middleware, translateApi.middleware];

export const store = configureStore({
   reducer: {
      [searchApi.reducerPath]: searchApi.reducer,
      [translateApi.reducerPath]: translateApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
});

setupListeners(store.dispatch);

export type State = ReturnType<typeof store.getState>;
