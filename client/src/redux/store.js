import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './loaderSlice';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    loader: loaderReducer,
    user: userReducer,
  },
});
