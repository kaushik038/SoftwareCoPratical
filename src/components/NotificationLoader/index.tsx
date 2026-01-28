import { moderateScale } from 'AppSrc/utils/scalingUtils';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const NotificationLoader = () => {
  return (
    <SkeletonPlaceholder>
      {Array.from({ length: 10 }).map((_, index) => (
        <SkeletonPlaceholder.Item
          height={moderateScale(168)}
          borderRadius={moderateScale(16)}
          marginTop={moderateScale(34)}
        />
      ))}
    </SkeletonPlaceholder>
  );
};

export default NotificationLoader;
