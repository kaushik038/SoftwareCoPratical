import { moderateScale } from 'AppSrc/utils/scalingUtils';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CarouselLoader = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        width={'25%'}
        height={moderateScale(18)}
        borderRadius={moderateScale(16)}
        marginHorizontal={moderateScale(24)}
        marginBottom={moderateScale(16)}
      />
      <SkeletonPlaceholder.Item
        height={moderateScale(142)}
        borderRadius={moderateScale(16)}
        marginHorizontal={moderateScale(24)}
      />
    </SkeletonPlaceholder>
  );
};

export default CarouselLoader;
