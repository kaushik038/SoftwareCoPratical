import { FlatList, ListRenderItem, View } from 'react-native';
import styles from './styles';
import React, { useCallback } from 'react';
import StoreItem from 'AppCompoments/StoreCard';
import { useStores } from 'AppMpdules/home/api';
import { Store } from 'AppCompoments/StoreCarousel';
import ListStoreItemLoader from 'AppSrc/components/ListStoreItemLoader';

const ViewAll: React.FC = () => {
  const { data, isLoading } = useStores();

  const rendarItem: ListRenderItem<Store> = useCallback(({ item }) => {
    return <StoreItem isViewAll item={item} />;
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ListStoreItemLoader />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.data?.data}
        renderItem={rendarItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ViewAll;
