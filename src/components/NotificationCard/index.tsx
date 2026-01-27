import { View } from 'react-native';
import styles from './styles';
import CustomText from 'AppCompoments/CustomText';
import React, { useCallback, useState } from 'react';
import { AdvancedCheckbox } from 'react-native-advanced-checkbox';
import { Images } from 'AppAssets/images';
import { moderateScale } from 'AppUtils/scalingUtils';
import { Switch } from 'react-native-switch';
import Colors from 'AppTheme/colors';
import {
  NotificationPreference,
  toggleChannel,
  toggleEnabled,
} from 'AppSrc/redux/notificationSlice';
import { useDispatch } from 'react-redux';

interface NotificationProps {
  item: NotificationPreference;
}

const NotificationCard: React.FC<NotificationProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleOnChnageValue = useCallback((type: string) => {
    if (type == 'push') {
      dispatch(
        toggleChannel({
          id: item._id,
          channel: 'pushEnabled',
        }),
      );
    } else if (type == 'email') {
      dispatch(
        toggleChannel({
          id: item._id,
          channel: 'emailEnabled',
        }),
      );
    } else {
      dispatch(
        toggleChannel({
          id: item._id,
          channel: 'smsEnabled',
        }),
      );
    }
  }, []);

  const handleSwitchOnChnageValue = () => {
    dispatch(toggleEnabled(item._id));
  };

  return (
    <View style={[styles.card, { opacity: item?.enabled ? 1 : 0.8 }]}>
      <View style={styles.cardHeaderView}>
        <View style={styles.titleView}>
          <CustomText value={item?.displayText} style={styles.title} />
          <CustomText value={item?.description} style={styles.description} />
        </View>
        <Switch
          value={item?.enabled}
          onValueChange={handleSwitchOnChnageValue}
          circleSize={18}
          switchBorderRadius={20}
          changeValueImmediately={true}
          barHeight={22}
          renderActiveText={false}
          renderInActiveText={false}
          switchLeftPx={2.5}
          switchRightPx={2.5}
          backgroundActive={Colors.primary}
          backgroundInactive={Colors.border}
        />
      </View>
      <CustomText value="Notifications Channels" style={styles.subTitle} />
      <View style={styles.checkBoxView}>
        <AdvancedCheckbox
          checkedImage={Images.checked}
          uncheckedImage={Images.unchecked}
          value={item?.pushEnabled}
          onValueChange={() => handleOnChnageValue('push')}
          label="Push"
          labelStyle={styles.label}
          size={moderateScale(18)}
        />
        <AdvancedCheckbox
          checkedImage={Images.checked}
          uncheckedImage={Images.unchecked}
          value={item?.emailEnabled}
          onValueChange={() => handleOnChnageValue('email')}
          label="Email"
          labelStyle={styles.label}
          size={moderateScale(18)}
        />
        <AdvancedCheckbox
          checkedImage={Images.checked}
          uncheckedImage={Images.unchecked}
          value={item?.smsEnabled}
          onValueChange={() => handleOnChnageValue('sms')}
          label="Sms"
          labelStyle={styles.label}
          size={moderateScale(18)}
        />
      </View>
    </View>
  );
};

export default NotificationCard;
