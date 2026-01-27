import { FlatList, ListRenderItem, View } from 'react-native';
import styles from './styles';
import React, { useCallback } from 'react';
import StoreItem from 'AppCompoments/StoreCard';
import { useStores } from 'AppMpdules/home/api';
import { Store } from 'AppCompoments/StoreCarousel';

const ViewAll: React.FC = () => {
  const { data } = useStores();

  const rendarItem: ListRenderItem<Store> = useCallback(({ item }) => {
    return <StoreItem isViewAll item={item} />;
  }, []);

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
