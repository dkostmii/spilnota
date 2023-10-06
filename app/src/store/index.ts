import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { partnersApi } from './services/partners';
import { newsApi } from './services/news';
import { contactsApi } from './services/contacts';
import { socialApi } from './services/social';
import { bankDetailsApi } from './services/bankDetails';
import { supportApi } from './services/support';

export const store = configureStore({
  reducer: {
    [partnersApi.reducerPath]: partnersApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [socialApi.reducerPath]: socialApi.reducer,
    [bankDetailsApi.reducerPath]: bankDetailsApi.reducer,
    [supportApi.reducerPath]: supportApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(partnersApi.middleware)
      .concat(newsApi.middleware)
      .concat(contactsApi.middleware)
      .concat(socialApi.middleware)
      .concat(bankDetailsApi.middleware)
      .concat(supportApi.middleware),
});

setupListeners(store.dispatch);
