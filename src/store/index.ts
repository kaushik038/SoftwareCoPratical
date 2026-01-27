import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from 'AppSrc/redux/notificationSlice';

export const appStore = configureStore({
  reducer: {
    notifications: notificationReducer,
  },
});
