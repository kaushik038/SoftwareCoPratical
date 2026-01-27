import { StyleSheet } from 'react-native';

import Colors from 'AppTheme/colors';
import { moderateScale } from 'AppUtils/scalingUtils';

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: moderateScale(8),
    height: moderateScale(8),
    borderRadius: moderateScale(4),
    backgroundColor: Colors.gray,
    marginHorizontal: 4,
  },
  activeDot: {
    width: moderateScale(32),
    backgroundColor: Colors.primary,
  },
});

export default styles;
