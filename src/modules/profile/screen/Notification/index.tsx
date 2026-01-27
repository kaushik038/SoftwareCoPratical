import { FlatList, ListRenderItem, View } from 'react-native';
import styles from './styles';
import CustomText from 'AppCompoments/CustomText';
import NotificationCard from 'AppCompoments/NotificationCard';
import { useNotifications } from 'AppMpdules/profile/api';

import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  NotificationPreference,
  setNotifications,
} from 'AppSrc/redux/notificationSlice';

const Notification = () => {
  const { data } = useNotifications();
  const dispatch = useDispatch();
  const notifications = useSelector((state: any) => state.notifications?.list);

  useMemo(() => {
    if (data?.data?.data?.length > 0) {
      dispatch(setNotifications(data?.data?.data));
    }
  }, [data]);

  const renderItem: ListRenderItem<NotificationPreference> = useCallback(
    ({ item }) => {
      return <NotificationCard item={item} />;
    },
    [],
  );

  if (notifications?.length == 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Notification;
