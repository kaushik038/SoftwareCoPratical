import { useCallback, useRef, useState } from 'react';
import { FlatList, Image, ListRenderItem, View } from 'react-native';
import styles from './styles';
import CustomImage from 'AppCompoments/CutomImage';
import { Images } from 'AppAssets/images';
import CustomText from 'AppCompoments/CustomText';
import PaginationDots from 'AppCompoments/PaginationDot';
import { useOffer } from 'AppMpdules/home/api';

interface OfferItem {
  image: string;
  title: string;
  description: string;
}

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { data, error } = useOffer();

  console.log('data : ', data);
  console.log('error : ', error);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const rendarItem: ListRenderItem<OfferItem> = useCallback(({ item }) => {
    return (
      <CustomImage
        source={{ uri: item?.image }}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.imageInnerView}>
          <CustomText value={item?.title} style={styles.imageTitle} />
          <CustomText value={item?.description} style={styles.imageSubTitle} />
        </View>
      </CustomImage>
    );
  }, []);

  if (data?.data?.data?.length == 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <CustomText value="Hot deals" style={styles.headerTitle} />
      <FlatList
        data={data?.data?.data ?? []}
        renderItem={rendarItem}
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
      />
      <PaginationDots data={data?.data?.data ?? []} activeIndex={activeIndex} />
    </View>
  );
};

export default Carousel;
