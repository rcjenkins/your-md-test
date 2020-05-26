import { configureStore } from '@reduxjs/toolkit';
import conditionsReducer from '../features/conditions/conditionsSlice';

export default configureStore({
  reducer: {
    data: conditionsReducer,
  },
});
