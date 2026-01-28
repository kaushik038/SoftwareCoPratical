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
  leftIcon: {
    fontSize: moderateScale(24),
    color: Colors.black,
  },
  title: {
    fontSize: moderateScale(16),
    fontFamily: FONTS_FMALIY[600],
    lineHeight: moderateScale(27.2),
  },
  nextIcon: {
    fontSize: moderateScale(12),
    color: Colors.gray,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScale(16),
  },
  titleView: {
    flexDirection: 'row',
    gap: moderateScale(16),
  },
  minIcon: {
    fontSize: moderateScale(28),
    color: Colors.black,
  },
});

export default styles;
