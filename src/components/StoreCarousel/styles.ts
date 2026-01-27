import { Dimensions, StyleSheet } from 'react-native';

import Colors from 'AppTheme/colors';
import FONTS_FMALIY from 'AppTheme/fonts';
import { moderateScale } from 'AppUtils/scalingUtils';

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  image: {
    width: (width - moderateScale(44)) / 1.8,
    height: moderateScale(188),
    borderRadius: moderateScale(20),
  },
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
  viewAll: {
    fontSize: moderateScale(12),
    fontFamily: FONTS_FMALIY[500],
    color: Colors.primary,
  },
  contentContainerStyle: {
    paddingLeft: moderateScale(24),
  },
});

export default styles;
