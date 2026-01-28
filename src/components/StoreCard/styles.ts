import { Dimensions, StyleSheet } from 'react-native';

import Colors from 'AppTheme/colors';
import FONTS_FMALIY from 'AppTheme/fonts';
import { moderateScale } from 'AppUtils/scalingUtils';

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  image: {
    height: moderateScale(188),
    borderRadius: moderateScale(20),
  },
  card: {
    width: (width - moderateScale(44)) / 1.8,
    marginRight: moderateScale(20),
    overflow: 'hidden',
    gap: moderateScale(5),
    marginBottom: moderateScale(20),
  },
  viewAllCard: {
    width: width - moderateScale(48),
    overflow: 'hidden',
  },
  imageTitle: {
    fontSize: moderateScale(17),
    fontFamily: FONTS_FMALIY[600],
    color: Colors.gray800,
  },
  imageSubTitle: {
    fontSize: moderateScale(14),
    fontFamily: FONTS_FMALIY[400],
    color: Colors.gray,
    width: '50%',
  },
  contentContainerStyle: {
    paddingLeft: moderateScale(24),
  },
  cardBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  star: {
    marginHorizontal: moderateScale(1),
  },
  button: {
    width: (width - moderateScale(44)) / 2,
    height: moderateScale(38),
    paddingHorizontal: moderateScale(11),
    paddingVertical: moderateScale(10),
  },
  buttonText: {
    fontSize: moderateScale(12),
    fontFamily: FONTS_FMALIY[400],
    color: Colors.white,
  },
  bottomButtonView: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    paddingTop: moderateScale(5),
    paddingLeft: moderateScale(5),
    backgroundColor: Colors.white,
    borderTopLeftRadius: moderateScale(24),
  },
});

export default styles;
