import { StyleSheet } from 'react-native';
import FONTS_FMALIY from 'AppTheme/fonts';
import { moderateScale } from 'AppUtils/scalingUtils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(24),
  },
  headerText: {
    fontSize: moderateScale(20),
    fontFamily: FONTS_FMALIY[600],
    paddingVertical: moderateScale(9),
  },
});

export default styles;
