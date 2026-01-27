import { useMutation } from '@tanstack/react-query';
import apiClient from 'AppApi/axiosClient';
import { LOGIN_API } from 'AppMpdules/auth/api/constnts';

export const useLogin = () =>
  useMutation({
    mutationKey: [LOGIN_API],
    mutationFn: (data: { username: string; password: string }) => {
      return apiClient.post(LOGIN_API, data);
    },
  });
