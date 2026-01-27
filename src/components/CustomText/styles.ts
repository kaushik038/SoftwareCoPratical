import { StyleSheet } from 'react-native';

import FONTS_FMALIY from 'AppTheme/fonts';
import { moderateScale } from 'AppUtils/scalingUtils';

const styles = StyleSheet.create({
  defaultText: {
    fontSize: moderateScale(14),
    fontFamily: FONTS_FMALIY[400],
  },
});

export default styles;
