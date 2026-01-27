import { StyleSheet } from 'react-native';

import Colors from 'AppTheme/colors';
import FONTS_FMALIY from 'AppTheme/fonts';
import { moderateScale } from 'AppUtils/scalingUtils';

const styles = StyleSheet.create({
  title: {
    fontSize: moderateScale(18),
    color: Colors.white,
    fontFamily: FONTS_FMALIY[600],
  },
  defaultBtn: {
    backgroundColor: Colors.primary,
    height: moderateScale(56),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(56),
  },
});

export default styles;
