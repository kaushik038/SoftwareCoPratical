import { moderateScale } from 'AppSrc/utils/scalingUtils';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const StoreItemLoader = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item flexDirection="row">
        <SkeletonPlaceholder.Item
          marginHorizontal={moderateScale(24)}
          marginRight={moderateScale(10)}
        >
          <SkeletonPlaceholder.Item
            width={'25%'}
            height={moderateScale(18)}
            borderRadius={moderateScale(16)}
            marginBottom={moderateScale(16)}
            marginTop={moderateScale(25)}
          />
          <SkeletonPlaceholder.Item
            width={moderateScale(190)}
            height={moderateScale(188)}
            borderRadius={moderateScale(16)}
          />
          <SkeletonPlaceholder.Item
            width={'25%'}
            height={moderateScale(18)}
            borderRadius={moderateScale(16)}
            marginBottom={moderateScale(5)}
            marginTop={moderateScale(18)}
          />
          <SkeletonPlaceholder.Item
            width={'50%'}
            height={moderateScale(18)}
            borderRadius={moderateScale(16)}
          />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          marginHorizontal={moderateScale(24)}
          marginLeft={moderateScale(10)}
        >
          <SkeletonPlaceholder.Item
            width={'25%'}
            height={moderateScale(18)}
            borderRadius={moderateScale(16)}
            marginBottom={moderateScale(16)}
            marginTop={moderateScale(25)}
          />
          <SkeletonPlaceholder.Item
            width={moderateScale(190)}
            height={moderateScale(188)}
            borderRadius={moderateScale(16)}
          />
          <SkeletonPlaceholder.Item
            width={'25%'}
            height={moderateScale(18)}
            borderRadius={moderateScale(16)}
            marginBottom={moderateScale(5)}
            marginTop={moderateScale(18)}
          />
          <SkeletonPlaceholder.Item
            width={'50%'}
            height={moderateScale(18)}
            borderRadius={moderateScale(16)}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default StoreItemLoader;
