// первая строчка не меняется
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// импрорт редьюсеров
import authReducer from './slices/auth';
import appReducer from './slices/app';

// не меняется
const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: {
    // меняется только набор редьюсеров 
    auth: authReducer,
    app: appReducer, 
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});
