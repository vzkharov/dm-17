import { configureStore } from '@reduxjs/toolkit';

import { env } from '~/env/shared';

/** Slices */
import { ordersReducer } from '~/features/orders/reducer';

/** APIs */
import { usersApi } from '~/features/users/api';
import { suggestionsApi } from '~/features/suggestions/api';

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [suggestionsApi.reducerPath]: suggestionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware, suggestionsApi.middleware),

  devTools: env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
