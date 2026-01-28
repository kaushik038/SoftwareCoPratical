import { Dimensions, Platform, View, ViewStyle } from 'react-native';

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
import Svg, { Path } from 'react-native-svg';
import { isTablet } from 'react-native-device-info';

export interface StoreItem {
  item: Store;
  isViewAll?: boolean;
}

const StoreItem: React.FC<StoreItem> = ({ isViewAll = false, item }) => {
  const navigation = useNavigation<StoreDetailNavProp>();
  const width = Dimensions.get('screen').width;

  const handleOnPress = useCallback((id: string) => {
    navigation.navigate(ROUTE_NAME.STORE_DETAIL, {
      id: id,
    });
  }, []);

  const WhiteCurve = ({ width = 80, height = 80 }) => {
    return (
      <Svg
        width={moderateScale(width)}
        height={moderateScale(height)}
        viewBox="0 0 80 80"
      >
        <Path
          d="
          M80 0
          V80
          H0
          C20 80 30 70 30 60
          C30 50 40 40 60 40
          H80
          Z
        "
          fill="white"
        />
      </Svg>
    );
  };
  return (
    <View style={[styles.card, isViewAll && styles.viewAllCard]}>
      <CustomImage
        source={{ uri: item?.image }}
        style={styles.image}
        resizeMode="cover"
      >
        <View
          style={{
            position: 'absolute',
            right: -moderateScale(50),
            bottom: moderateScale(42),
            transform: [{ rotate: 'deg' }],
          }}
        >
          <WhiteCurve />
        </View>

        <View style={styles.bottomButtonView}>
          <View
            style={{
              position: 'absolute',
              bottom: -moderateScale(2),
              left: isTablet() ? -48 : -30,
            }}
          >
            <WhiteCurve />
          </View>
          <CustomButton
            title="View Store"
            onPress={() => handleOnPress(item?._id)}
            style={
              [
                styles.button,
                !isViewAll && { width: (width - moderateScale(44)) / 1.8 / 2 },
              ] as ViewStyle[]
            }
            textStyle={styles.buttonText}
          />
        </View>
      </CustomImage>
      <CustomText value={item?.name} style={styles.imageTitle} />
      <View style={styles.cardBottomRow}>
        <CustomText value={item?.category} style={styles.imageSubTitle} />
        <StarRatingDisplay
          rating={4}
          starSize={moderateScale(16)}
          starStyle={styles.star}
          color={Colors.primary}
        />
      </View>
    </View>
  );
};

export default StoreItem;
