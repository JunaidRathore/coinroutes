import { createSlice } from '@reduxjs/toolkit';

const orderBookSlice = createSlice({
  name: 'orderBook',
  initialState: {
    bids: [],
    offers: [],
    product_id: 'BTC-USD'
  },
  reducers: {
    updateOrderBook: (state, action) => {
      state.bids = action.payload.bids;
      state.offers = action.payload.offers;
    },
    updateProductId: (state, action) => {
      state.product_id = action.payload;
    }
  }
});

export const { updateOrderBook, updateProductId } = orderBookSlice.actions;

export default orderBookSlice.reducer;
