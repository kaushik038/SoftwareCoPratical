import { StyleSheet } from 'react-native';

import Colors from 'AppTheme/colors';
import FONTS_FMALIY from 'AppTheme/fonts';
import { moderateScale } from 'AppUtils/scalingUtils';

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(25),
    gap: moderateScale(10),
    backgroundColor: Colors.white,
  },
  headerTitle: {
    fontSize: moderateScale(18),
    fontFamily: FONTS_FMALIY[600],
    color: Colors.black,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(24),
  },
  coinStack: {
    fontSize: moderateScale(12),
    color: Colors.black,
  },
  centerComponentView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    fontSize: moderateScale(12),
    fontFamily: FONTS_FMALIY[600],
    color: Colors.black,
  },
  totalSale: {
    fontSize: moderateScale(12),
    fontFamily: FONTS_FMALIY[400],
    color: Colors.gray,
  },
  dropdownButtonStyle: {
    width: moderateScale(90),
    height: moderateScale(22),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  dropdownButtonTxtStyle: {
    fontSize: moderateScale(14),
    fontFamily: FONTS_FMALIY[400],
    lineHeight: moderateScale(18.2),
    color: Colors.gray,
  },
  dropdownButtonArrowStyle: {
    fontSize: moderateScale(18),
  },
  dropdownButtonIconStyle: {
    fontSize: moderateScale(18),
    color: Colors.primary,
    marginLeft: moderateScale(8),
  },
  dropdownMenuStyle: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(8),
    gap: moderateScale(6),
    padding: moderateScale(10),
  },
  dropdownItemStyle: {
    width: '100%',
    justifyContent: 'center',
    paddingVertical: moderateScale(6),
  },
  dropdownItemTxtStyle: {
    fontSize: moderateScale(14),
    fontFamily: FONTS_FMALIY[400],
    lineHeight: moderateScale(22),
    color: Colors.secondary,
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  chartView: {
    padding: moderateScale(20),
    alignItems: 'center',
  },
});

export default styles;
