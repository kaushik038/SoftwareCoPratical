import { useCallback } from 'react';
import { FlatList, ListRenderItem, TouchableOpacity, View } from 'react-native';

import StoreItem from 'AppCompoments/StoreCard';
import CustomText from 'AppCompoments/CustomText';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ROUTE_NAME } from 'AppRoutes/constant';
import { useStores } from 'AppMpdules/home/api';
import StoreItemLoader from '../StoreItemLoader';

export interface Store {
  category: string;
  image: string;
  location: {
    address: string;
    lat: number;
    long: number;
  };
  name: string;
  _id: string;
}

const StoreCarousel = () => {
  const navigation = useNavigation();

  const { data, isLoading } = useStores();

  const rendarItem: ListRenderItem<Store> = useCallback(({ item }) => {
    return <StoreItem item={item} />;
  }, []);

  const handleViewAllOnPress = useCallback(() => {
    navigation.navigate(ROUTE_NAME.VIEW_ALL as never);
  }, []);

  if (isLoading) {
    return <StoreItemLoader />;
  }

  if (!(data?.data?.data?.length > 0)) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <CustomText value="Stores" style={styles.headerTitle} />
        <TouchableOpacity onPress={handleViewAllOnPress}>
          <CustomText value="View All" style={styles.viewAll} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data?.data?.data}
        renderItem={rendarItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default StoreCarousel;
