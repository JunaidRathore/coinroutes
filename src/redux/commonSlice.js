import { createSlice } from '@reduxjs/toolkit';

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    loader: true
  },
  reducers: {
    updateLoader: (state, action) => {
      state.loader = action.payload;
    }
  }
});

export const { updateLoader } = commonSlice.actions;

export default commonSlice.reducer;
