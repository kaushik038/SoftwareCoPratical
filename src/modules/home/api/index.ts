import { useQuery } from '@tanstack/react-query';
import apiClient from 'AppApi/axiosClient';
import { HOME_API } from './constants';

export const useOffer = () =>
  useQuery({
    queryKey: [HOME_API.OFFERS],
    queryFn: () => {
      return apiClient.get(HOME_API.OFFERS);
    },
  });

export const useStores = () =>
  useQuery({
    queryKey: [HOME_API.STORES],
    queryFn: () => {
      return apiClient.get(HOME_API.STORES);
    },
  });

export const useStore = (id: string) =>
  useQuery({
    queryKey: [HOME_API.STORE_DETAIL, id],
    queryFn: () => {
      return apiClient.get(`${HOME_API.STORE_DETAIL}/${id}`);
    },
  });

export const useStatistics = (period: string) =>
  useQuery({
    queryKey: [HOME_API.STATISTICS, period],
    queryFn: () => {
      return apiClient.get(
        `${HOME_API.STATISTICS}?period=${period}&filter=true`,
      );
    },
  });
