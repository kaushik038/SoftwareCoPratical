import { TextStyle, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import CustomText from 'AppCompoments/CustomText';
import CustomIcon from 'AppCompoments/CustomIcon';
import ICONS from 'AppUtils/icons';
import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ROUTE_NAME } from 'AppRoutes/constant';

interface SettingItemButtonProps {
  iconName: string;
  title: string;
  onPress?: () => void;
  leftIcon?: TextStyle;
}

const Profile = () => {
  const navigation = useNavigation();

  const handleAudioRecordingPress = useCallback(() => {
    navigation.navigate(ROUTE_NAME.AUDIIO_RECORDING as never);
  }, []);
  const handleManageNotifictionPress = useCallback(() => {
    navigation.navigate(ROUTE_NAME.NOTIFICATION as never);
  }, []);

  const SettingItemButton: React.FC<SettingItemButtonProps> = ({
    iconName,
    title,
    onPress,
    leftIcon,
  }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.titleView}>
          <CustomIcon name={iconName} style={[styles.leftIcon, leftIcon]} />
          <CustomText value={title} style={styles.title} />
        </View>
        <CustomIcon name={ICONS.NEXT} style={styles.nextIcon} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <SettingItemButton
        iconName={ICONS.MIC}
        title={'Audio Recording'}
        onPress={handleAudioRecordingPress}
        leftIcon={styles.minIcon}
      />
      <SettingItemButton
        iconName={ICONS.NOTIFICATION}
        title={'Manage Notifications'}
        onPress={handleManageNotifictionPress}
      />
    </View>
  );
};

export default Profile;
