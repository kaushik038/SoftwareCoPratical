import { StyleSheet } from 'react-native';

import FONTS_FMALIY from 'AppTheme/fonts';
import { moderateScale } from 'AppUtils/scalingUtils';
import Colors from 'AppTheme/colors';

const styles = StyleSheet.create({
  defaultText: {
    fontSize: moderateScale(14),
    fontFamily: FONTS_FMALIY[400],
  },
  selectedTab: {
    backgroundColor: Colors.primary,
  },
  tab: {
    marginTop: moderateScale(20),
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(16),
    borderRadius: moderateScale(20),
    height: moderateScale(40),
    width: moderateScale(94),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: moderateScale(4),
  },
  icon: {
    fontSize: moderateScale(18),
    color: Colors.black32,
  },
  focusIcon: {
    fontSize: moderateScale(18),
    color: Colors.white,
  },
  title: {
    fontSize: moderateScale(12),
    fontFamily: FONTS_FMALIY[500],
    lineHeight: moderateScale(16.8),
    color: Colors.white,
  },
});

export default styles;
