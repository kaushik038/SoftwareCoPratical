import { StyleSheet } from 'react-native';
import FONTS_FMALIY from 'AppTheme/fonts';
import { moderateScale } from 'AppUtils/scalingUtils';
import Colors from 'AppSrc/theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(24),
    backgroundColor: Colors.white,
  },
  headerText: {
    fontSize: moderateScale(20),
    fontFamily: FONTS_FMALIY[600],
    paddingVertical: moderateScale(9),
  },
});

export default styles;
