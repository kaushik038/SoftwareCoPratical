import { moderateScale } from 'AppSrc/utils/scalingUtils';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ChartLoader = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        width={'35%'}
        height={moderateScale(18)}
        borderRadius={moderateScale(16)}
        marginBottom={moderateScale(16)}
        marginTop={moderateScale(25)}
        marginHorizontal={moderateScale(24)}
      />
      <SkeletonPlaceholder.Item
        marginHorizontal={moderateScale(24)}
        marginRight={moderateScale(10)}
        alignItems="center"
        marginTop={moderateScale(40)}
      >
        <SkeletonPlaceholder.Item
          width={moderateScale(180)}
          height={moderateScale(180)}
          borderRadius={moderateScale(90)}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default ChartLoader;
