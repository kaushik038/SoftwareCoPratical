import { View } from 'react-native';

import CustomImage from 'AppCompoments/CutomImage';
import CustomButton from 'AppCompoments/CustomButton';
import CustomText from 'AppCompoments/CustomText';

import Colors from 'AppTheme/colors';
import styles from './styles';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { moderateScale } from 'AppUtils/scalingUtils';
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { ROUTE_NAME, StoreDetailNavProp } from 'AppRoutes/constant';
import { Store } from 'AppCompoments/StoreCarousel';

export interface StoreItem {
  item: Store;
  isViewAll?: boolean;
}

const StoreItem: React.FC<StoreItem> = ({ isViewAll = false, item }) => {
  const navigation = useNavigation<StoreDetailNavProp>();

  const handleOnPress = useCallback((id: string) => {
    navigation.navigate(ROUTE_NAME.STORE_DETAIL, {
      id: id,
    });
  }, []);

  return (
    <View style={[styles.card, isViewAll && styles.viewAllCard]}>
      <CustomImage
        source={{ uri: item?.image }}
        style={styles.image}
        resizeMode="cover"
      >
        <View style={styles.bottomButtonView}>
          <CustomButton
            title="View Store"
            onPress={() => handleOnPress(item?._id)}
            style={styles.button}
            textStyle={styles.buttonText}
          />
        </View>
      </CustomImage>
      <CustomText value={item?.name} style={styles.imageTitle} />
      <View style={styles.cardBottomRow}>
        <CustomText value={item?.category} style={styles.imageSubTitle} />
        <StarRatingDisplay
          rating={4}
          starSize={moderateScale(20)}
          starStyle={styles.star}
          color={Colors.primary}
        />
      </View>
    </View>
  );
};

export default StoreItem;
