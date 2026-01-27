import Colors from 'AppTheme/colors';
import FONTS_FMALIY from 'AppTheme/fonts';
import { moderateScale } from 'AppUtils/scalingUtils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerView: {
    height: moderateScale(60),
    paddingHorizontal: moderateScale(24),
    gap: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleHeaderView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: moderateScale(10),
  },
  back: {
    fontSize: moderateScale(14),
    color: Colors.black,
  },
  detailBack: {
    color: Colors.white,
  },
  title: {
    fontSize: moderateScale(18),
    fontFamily: FONTS_FMALIY[600],
    color: Colors.black,
    lineHeight: moderateScale(27),
  },
  rightTitle: {
    fontSize: moderateScale(18),
    fontFamily: FONTS_FMALIY[500],
    color: Colors.red,
  },
  backButton: {
    width: moderateScale(36),
    height: moderateScale(36),
    borderWidth: 1,
    borderColor: Colors.whiteE4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
  },
});

export default styles;
