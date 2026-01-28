import CustomIcon from 'AppCompoments/CustomIcon';
import ICONS from 'AppUtils/icons';
import { View } from 'react-native';
import styles from './styles';
import CustomText from 'AppCompoments/CustomText';
import React from 'react';

interface CustomTabBarProps {
  route: {
    name: string;
  };
  focused: boolean;
}

const CustomTabBar: React.FC<CustomTabBarProps> = ({ route, focused }) => {
  let iconName = '';
  if (route.name === 'Home') {
    iconName = focused ? ICONS.HOME_FOCUS : ICONS.HOME;
  } else if (route.name === 'Profile') {
    iconName = focused ? ICONS.USER_FOCUSE : ICONS.USER;
  }

  return (
    <View style={[styles.tab, focused && styles.selectedTab]}>
      <CustomIcon
        name={iconName}
        style={[
          styles.icon,
          focused && styles.focusIcon,
          route.name === 'Profile' && styles.profileIcon,
        ]}
      />
      {focused && <CustomText value={route.name} style={styles.title} />}
    </View>
  );
};

export default CustomTabBar;
