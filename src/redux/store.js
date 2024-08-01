import { configureStore } from '@reduxjs/toolkit';

import orderBookReducer from './orderBookSlice';
import commonSliceReducer from './commonSlice';

export const store = configureStore({
  reducer: {
    orderBook: orderBookReducer,
    common: commonSliceReducer
  }
});
