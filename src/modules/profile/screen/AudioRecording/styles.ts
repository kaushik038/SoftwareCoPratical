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
  lottieView: {
    height: moderateScale(154),
    width: moderateScale(154),
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(48),
  },
  time: {
    fontFamily: FONTS_FMALIY[600],
    fontSize: moderateScale(32),
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  audioPlayButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default styles;
