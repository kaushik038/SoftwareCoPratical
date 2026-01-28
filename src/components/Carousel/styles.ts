import Colors from 'AppTheme/colors';
import FONTS_FMALIY from 'AppTheme/fonts';
import { moderateScale } from 'AppUtils/scalingUtils';
import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  image: {
    aspectRatio: 16 / 8,
    width: width - moderateScale(48),
    height: moderateScale(142),
    borderRadius: moderateScale(16),
    marginHorizontal: moderateScale(24),
  },
  container: {
    gap: moderateScale(10),
    backgroundColor: Colors.white,
  },
  headerTitle: {
    fontSize: moderateScale(16),
    fontFamily: FONTS_FMALIY[600],
    color: Colors.black,
    marginLeft: moderateScale(24),
  },
  imageInnerView: {
    height: '100%',
    backgroundColor: Colors.black50,
    paddingVertical: moderateScale(24),
    paddingHorizontal: moderateScale(15),
  },
  imageTitle: {
    fontSize: moderateScale(25),
    fontFamily: FONTS_FMALIY[700],
    color: Colors.white,
  },
  imageSubTitle: {
    fontSize: moderateScale(12),
    fontFamily: FONTS_FMALIY[500],
    color: Colors.white,
  },
});

export default styles;
