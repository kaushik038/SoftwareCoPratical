import { moderateScale } from 'AppSrc/utils/scalingUtils';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ListStoreItemLoader = () => {
  return (
    <SkeletonPlaceholder>
      {Array.from({ length: 10 }).map((_, index) => (
        <SkeletonPlaceholder.Item marginVertical={moderateScale(10)}>
          <SkeletonPlaceholder.Item
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
      ))}
    </SkeletonPlaceholder>
  );
};

export default ListStoreItemLoader;
