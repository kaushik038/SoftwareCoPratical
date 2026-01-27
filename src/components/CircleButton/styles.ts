import Colors from 'AppTheme/colors';
import FONTS_FMALIY from 'AppTheme/fonts';
import { moderateScale } from 'AppUtils/scalingUtils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: moderateScale(92),
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(10),
  },
  button: {
    height: moderateScale(62),
    width: moderateScale(62),
    borderRadius: moderateScale(62),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue80,
  },
  icon: {
    fontSize: moderateScale(28),
    color: Colors.secondary,
  },
  label: {
    fontSize: moderateScale(14),
    fontFamily: FONTS_FMALIY[400],
    color: Colors.secondary,
    textAlign: 'center',
  },
});

export default styles;
