import { combineReducers } from '@reduxjs/toolkit';
import productsCollectionSlice from './productsCollectionSlice';
import filtersSlice from './filtersSlice';
import cartSlice from './cartSlice';
import userAuthSlice from './userAuthSlice';
import { apiSlice } from './api/apiSlice';

export const rootReducer = combineReducers({
  filtersSlice,
  productsCollectionSlice,
  cartSlice,
  userAuthSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
