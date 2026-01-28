import { Touchable, TouchableOpacity, View, ViewStyle } from 'react-native';
import styles from './styles';
import CustomIcon from 'AppCompoments/CustomIcon';
import ICONS from 'AppUtils/icons';
import CustomText from 'AppCompoments/CustomText';
import React, { useCallback } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ROUTE_NAME } from 'AppSrc/navigations/constant';
import { removeItem } from 'AppSrc/utils/storage';
import { AUTH_TOKEN } from 'AppSrc/services/constants';

interface CustomHeaderProps {
  title: string;
  isRight: boolean;
  isLeft: boolean;
  navigation: NativeStackNavigationProp<ParamListBase>;
  isDetailPage?: boolean;
  headerStyle?: ViewStyle;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  isRight,
  isLeft,
  navigation,
  isDetailPage,
  headerStyle,
}) => {
  const insets = useSafeAreaInsets();

  const handleBackPress = useCallback(() => {
    navigation?.goBack();
  }, []);

  const handleRightPress = useCallback(() => {
    removeItem(AUTH_TOKEN);
    navigation.reset({
      index: 0,
      routes: [{ name: ROUTE_NAME.LOGIN }],
    });
  }, []);

  return (
    <View style={[styles.headerView, { marginTop: insets.top }, headerStyle]}>
      <View style={styles.titleHeaderView}>
        {isLeft && (
          <TouchableOpacity
            onPress={handleBackPress}
            style={[!isDetailPage && styles.backButton]}
          >
            <CustomIcon
              name={ICONS.BACK}
              style={[styles.back, isDetailPage && styles.detailBack]}
            />
          </TouchableOpacity>
        )}
        {title && <CustomText value={title} style={styles.title} />}
      </View>
      {isRight && (
        <TouchableOpacity onPress={handleRightPress}>
          <CustomText value="Logout" style={styles.rightTitle} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomHeader;
