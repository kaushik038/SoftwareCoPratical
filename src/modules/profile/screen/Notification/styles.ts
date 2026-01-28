import Colors from 'AppTheme/colors';
import FONTS_FMALIY from 'AppTheme/fonts';
import { moderateScale } from 'AppUtils/scalingUtils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(24),
    backgroundColor: Colors.white,
  },
  headreTxt: {
    fontSize: moderateScale(18),
    fontFamily: FONTS_FMALIY[500],
  },
});

export default styles;
