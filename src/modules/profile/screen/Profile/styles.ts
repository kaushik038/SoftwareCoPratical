import Colors from 'AppTheme/colors';
import FONTS_FMALIY from 'AppTheme/fonts';
import { moderateScale } from 'AppUtils/scalingUtils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(24),
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
    fontFamily: FONTS_FMALIY[500],
  },
  nextIcon: {
    fontSize: moderateScale(10),
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
});

export default styles;
