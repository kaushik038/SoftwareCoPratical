import { useQuery } from '@tanstack/react-query';
import apiClient from 'AppApi/axiosClient';
import { PROFILE_API } from './constants';

export const useNotifications = () =>
  useQuery({
    queryKey: [PROFILE_API.NOTIFICATION],
    queryFn: () => {
      return apiClient.get(PROFILE_API.NOTIFICATION);
    },
  });
