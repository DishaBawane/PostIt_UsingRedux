import { configureStore } from '@reduxjs/toolkit';
import postSlice from './slices/post_slice'

export const store = configureStore({
  reducer: { list : postSlice},
})

export default store;