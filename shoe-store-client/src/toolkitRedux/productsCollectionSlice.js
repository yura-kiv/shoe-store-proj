import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  productsCount: 0,
  status: null,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'productsCollectionSlice/fetchProducts',
  async function ({ filters }, { rejectWithValue }) {
    try {
      const url = 'http://localhost:3000/api/products/productsFilter';
      const res = await axios.get(url, { params: filters });
      if (res.statusText !== 'OK') {
        throw new Error('Error in fetchProducts...');
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsCollectionSlice = createSlice({
  name: 'productsCollectionSlice',
  initialState: initialState,
  reducers: {
    updateProductsCollectionToInitialState(state, action) {
      state.products = [];
      state.productsCount = 0;
      state.status = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.products = action.payload.resultProducts;
        state.productsCount = action.payload.resultCount;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default productsCollectionSlice.reducer;
export const { updateProductsCollectionToInitialState } =
  productsCollectionSlice.actions;
