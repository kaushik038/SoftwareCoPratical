import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NotificationPreference {
  _id: string;
  preference: string;
  notificationTypeId: string;
  displayText: string;
  description: string;
  enabled: boolean;
  pushEnabled: boolean;
  emailEnabled: boolean;
  smsEnabled: boolean;
  defaultEnabled: boolean;
}

interface NotificationState {
  list: NotificationPreference[];
}

const initialState: NotificationState = {
  list: [],
};

export const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNotifications: (
      state,
      action: PayloadAction<NotificationPreference[]>,
    ) => {
      state.list = action.payload;
    },

    toggleChannel: (
      state,
      action: PayloadAction<{
        id: string;
        channel: 'pushEnabled' | 'emailEnabled' | 'smsEnabled';
      }>,
    ) => {
      const { id, channel } = action.payload;
      const item = state.list.find(n => n._id === id);
      if (item) {
        item[channel] = !item[channel];
        item.enabled = item.pushEnabled || item.emailEnabled || item.smsEnabled;
      }
    },

    toggleEnabled: (state, action: PayloadAction<string>) => {
      const item = state.list.find(n => n._id === action.payload);
      if (item) {
        item.enabled = !item.enabled;
        if (!item.enabled) {
          item.pushEnabled = false;
          item.emailEnabled = false;
          item.smsEnabled = false;
        }
      }
    },
  },
});

export const { setNotifications, toggleChannel, toggleEnabled } =
  notificationSlice.actions;

export default notificationSlice.reducer;
