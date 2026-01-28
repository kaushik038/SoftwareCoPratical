import { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import styles from './styles';
import CustomImage from 'AppCompoments/CutomImage';
import { Images } from 'AppAssets/images';
import CustomText from 'AppCompoments/CustomText';
import PaginationDots from 'AppCompoments/PaginationDot';
import { useOffer } from 'AppMpdules/home/api';
import CarouselLoader from '../CarouselLoader';

interface OfferItem {
  image: string;
  title: string;
  description: string;
}

const Carousel = () => {
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { data, isLoading } = useOffer();

  useEffect(() => {
    if (data?.data?.data.length > 0) {
    }
    const interval = setInterval(() => {
      if (data?.data?.data.length > 0) {
        const nextIndex =
          activeIndex === data?.data?.data.length - 1 ? 0 : activeIndex + 1;

        flatListRef.current?.scrollToIndex({
          index: nextIndex,
          animated: activeIndex === data?.data?.data.length - 1 ? false : true,
        });
        setActiveIndex(nextIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

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
          <CustomText
            value={item?.title}
            style={styles.imageTitle}
            numberOfLines={1}
          />
          <CustomText
            value={item?.description}
            style={styles.imageSubTitle}
            numberOfLines={2}
          />
        </View>
      </CustomImage>
    );
  }, []);

  if (isLoading) {
    return <CarouselLoader />;
  }

  if (data?.data?.data?.length == 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <CustomText value="Hot deals" style={styles.headerTitle} />
      <FlatList
        ref={flatListRef}
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
