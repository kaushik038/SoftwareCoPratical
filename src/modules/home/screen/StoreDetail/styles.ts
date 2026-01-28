import { StyleSheet } from 'react-native';
import FONTS_FMALIY from 'AppTheme/fonts';
import { moderateScale } from 'AppUtils/scalingUtils';
import Colors from 'AppTheme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerView: {
    backgroundColor: Colors.transparent,
  },
  image: {
    width: '100%',
    height: moderateScale(276),
  },
  innerContainer: {
    paddingHorizontal: moderateScale(24),
  },
  subHeaderTitle: {
    fontSize: moderateScale(16),
    fontFamily: FONTS_FMALIY[500],
    marginTop: moderateScale(24),
  },
  name: {
    fontSize: moderateScale(16),
    fontFamily: FONTS_FMALIY[700],
    color: Colors.white,
  },
  type: {
    fontSize: moderateScale(12),
    fontFamily: FONTS_FMALIY[500],
    color: Colors.white,
  },
  headerImageView: {
    flex: 1,
    backgroundColor: Colors.black50,
  },
  imageInnerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: moderateScale(8),
  },
  dot: {
    marginTop: moderateScale(4),
    fontSize: moderateScale(8),
    color: Colors.green,
  },
  logo: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(40),
    marginBottom: moderateScale(12),
  },
  location: {
    flexDirection: 'row',
    paddingVertical: moderateScale(12),
    gap: moderateScale(8),
    alignItems: 'flex-start',
  },
  locationIcon: {
    fontSize: moderateScale(28),
  },
  locationText: {
    fontSize: moderateScale(14),
    fontFamily: FONTS_FMALIY[400],
    lineHeight: moderateScale(19.6),
    color: Colors.gray,
  },
  mapView: {
    marginTop: moderateScale(16),
    width: '100%',
    height: moderateScale(194),
    borderRadius: moderateScale(20),
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: moderateScale(194),
  },
  markerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerAddress: {
    fontSize: moderateScale(18),
    fontFamily: FONTS_FMALIY[700],
    lineHeight: moderateScale(19.6),
    color: Colors.black,
  },
  locationImage: {
    height: moderateScale(50),
    width: moderateScale(50),
  },
});

export default styles;
