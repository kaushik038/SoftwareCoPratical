import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const ROUTE_NAME = {
  LOGIN: 'LOGIN',
  HOME: 'HOME',
  VIEW_ALL: 'VIEW_ALL',
  STORE_DETAIL: 'STORE_DETAIL',
  PROFILE: 'PROFILE',
  AUDIIO_RECORDING: 'AUDIIO_RECORDING',
  NOTIFICATION: 'NOTIFICATION',
};

export type RootStackParamList = {
  [ROUTE_NAME.STORE_DETAIL]: { id: string };
  [ROUTE_NAME.HOME]: undefined;
  [ROUTE_NAME.VIEW_ALL]: undefined;
  [ROUTE_NAME.PROFILE]: undefined;
  [ROUTE_NAME.AUDIIO_RECORDING]: undefined;
  [ROUTE_NAME.NOTIFICATION]: undefined;
};

export type StoreDetailNavProp = NativeStackNavigationProp<RootStackParamList>;
