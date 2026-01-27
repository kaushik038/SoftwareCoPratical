import { config } from 'AppUtils/config';
import { getItem } from 'AppUtils/storage';
import axios from 'axios';
import { AUTH_TOKEN } from 'AppApi/constants';
import Toast from 'react-native-toast-message';

const apiClient = axios.create({
  baseURL: config.API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  async config => {
    const token = getItem(AUTH_TOKEN);
    if (token != null) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    let message = 'Something went wrong';

    // Network error (no response)
    if (!error.response) {
      message = 'Network error. Please check your internet connection.';
    }
    // Request made, server responded
    else {
      const status = error.response.status;

      switch (status) {
        case 400:
          message = error.response.data?.message || 'Bad request';
          break;
        case 401:
          message = 'Session expired. Please login again.';
          break;
        case 403:
          message = 'You are not allowed to perform this action.';
          break;
        case 404:
          message = 'Resource not found.';
          break;
        case 500:
          message = 'Server error. Please try again later.';
          break;
        default:
          message = error.response.data?.message || 'Something went wrong';
      }
    }
    Toast.show({
      type: 'error',
      text1: message,
    });

    return Promise.reject(error);
  },
);

export default apiClient;
