import React, { useCallback, useEffect } from 'react';
import {
  NavigationContainer,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import Home from 'AppMpdules/home/screen/Home';
import ViewAll from 'AppMpdules/home/screen/ViewAll';

import { ROUTE_NAME, StoreDetailNavProp } from 'AppRoutes/constant';
import StoreDetail from 'AppMpdules/home/screen/StoreDetail';
import Profile from 'AppMpdules/profile/screen/Profile';
import AudioRecording from 'AppMpdules/profile/screen/AudioRecording';
import Notification from 'AppMpdules/profile/screen/Notification';
import CustomHeader from 'AppCompoments/CustomHeader';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from 'AppMpdules/auth/screen/login';
import CustomIcon from 'AppCompoments/CustomIcon';
import ICONS from 'AppUtils/icons';
import { View } from 'react-native';
import CustomTabBar from 'AppCompoments/CustomTabBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { moderateScale } from 'AppSrc/utils/scalingUtils';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  const customHeader = useCallback(
    (
      navigation: NativeStackNavigationProp<ParamListBase>,
      isLeft: boolean,
      isRight: boolean,
      title: string,
    ) => {
      return (
        <CustomHeader
          navigation={navigation}
          isLeft={isLeft}
          isRight={isRight}
          title={title}
        />
      );
    },
    [],
  );

  const ProfileStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTE_NAME.PROFILE}
          component={Profile}
          options={({ navigation }) => ({
            header: () => customHeader(navigation, true, true, 'Profile'),
          })}
        />
      </Stack.Navigator>
    );
  };

  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTE_NAME.HOME}
          component={Home}
          options={({ navigation }) => ({
            header: () => customHeader(navigation, false, false, 'SoftwareCo'),
          })}
        />
      </Stack.Navigator>
    );
  };

  const HomeTab = () => {
    const insets = useSafeAreaInsets();
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarStyle: {
            borderTopWidth: 0,
            elevation: 0,
            height: moderateScale(64),
            justifyContent: 'center',
          },
          tabBarIcon: ({ focused }) => {
            return <CustomTabBar route={route} focused={focused} />;
          },

          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTE_NAME.LOGIN}
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ROUTE_NAME.HOME}
          component={HomeTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ROUTE_NAME.NOTIFICATION}
          component={Notification}
          options={({ navigation }) => ({
            header: () =>
              customHeader(navigation, true, false, 'Manage Notifications'),
          })}
        />
        <Stack.Screen
          name={ROUTE_NAME.AUDIIO_RECORDING}
          component={AudioRecording}
          options={({ navigation }) => ({
            header: () =>
              customHeader(navigation, true, false, 'Audio Recording'),
          })}
        />
        <Stack.Screen
          name={ROUTE_NAME.VIEW_ALL}
          component={ViewAll}
          options={({ navigation }) => ({
            header: () => customHeader(navigation, true, false, 'Stores'),
          })}
        />
        <Stack.Screen
          name={ROUTE_NAME.STORE_DETAIL}
          component={StoreDetail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
