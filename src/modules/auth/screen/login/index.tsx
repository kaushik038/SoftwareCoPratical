import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';

import ICONS from 'AppUtils/icons';
import CustomImage from 'AppCompoments/CutomImage';
import CustomInput from 'AppCompoments/CustomInput';
import Colors from 'AppTheme/colors';
import CustomButton from 'AppCompoments/CustomButton';

import { Images } from 'AppAssets/images';

import styles from './styles';
import Toast from 'react-native-toast-message';
import { useLogin } from 'AppMpdules/auth/api';
import { getItem, setItem } from 'AppUtils/storage';
import { AUTH_TOKEN } from 'AppApi/constants';
import { useNavigation } from '@react-navigation/native';
import { ROUTE_NAME, StoreDetailNavProp } from 'AppRoutes/constant';

const Login = () => {
  const navigation = useNavigation<StoreDetailNavProp>();
  const [showPassword, setShowPassord] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { data, mutate: signin, error } = useLogin();

  useEffect(() => {
    const token = getItem(AUTH_TOKEN);
    if (token) {
      navigation.replace(ROUTE_NAME.HOME);
    }
  }, []);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
      Toast.show({
        type: 'success',
        text1: 'Login successfully!',
      });
      console.log('data?.data?.token : ', data?.data?.token);
      if (data?.data?.token) {
        setItem(AUTH_TOKEN, data?.data?.token);
        setTimeout(() => {
          navigation?.replace(ROUTE_NAME.HOME);
        }, 500);
      }
    }
  }, [data]);

  useEffect(() => {
    if (error?.message) {
      setIsLoading(false);
      Toast.show({
        type: 'error',
        text1: error.message,
      });
    }
  }, [error]);

  const handleOnRightIconPress = useCallback(() => {
    setShowPassord(!showPassword);
  }, [showPassword]);

  const passwordInputIcon = useMemo(
    () => (showPassword ? ICONS.EYE_VISBLE : ICONS.EYE_HIDDEN),
    [showPassword],
  );

  const onHandleSubmit = useCallback((values: any) => {
    if (!values.email) {
      Toast.show({
        type: 'error',
        text1: 'Email is empty!',
      });
    } else if (!values.password) {
      Toast.show({
        type: 'error',
        text1: 'Password is empty!',
      });
    } else {
      setIsLoading(true);
      signin({ username: values.email, password: values.password });
    }
  }, []);

  return (
    <View style={styles.container}>
      <CustomImage source={Images.loginBackground} style={styles.image} />
      <Formik
        initialValues={{ email: 'user1', password: 'password' }}
        onSubmit={onHandleSubmit}
      >
        {({ handleChange, values, handleSubmit }) => (
          <View style={styles.inputView}>
            <CustomInput
              value={values?.email}
              onTextChange={handleChange('email')}
              leftIcon={ICONS.EMAIL}
              leftIconStyle={styles.leftIcon}
              placeholderText={'Email or Mobile number'}
              placeholderTextColor={Colors.gray300}
            />
            <CustomInput
              value={values?.password}
              onTextChange={handleChange('password')}
              leftIcon={ICONS.LOCK}
              leftIconStyle={styles.leftIcon}
              rightIcon={passwordInputIcon}
              rightIconStyle={styles.rightIcon}
              placeholderText={'Password'}
              placeholderTextColor={Colors.gray300}
              onRightIconPress={handleOnRightIconPress}
              secureTextEntry={!showPassword}
            />
            <CustomButton
              title="Log In"
              onPress={handleSubmit}
              isLoading={isLoading}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
