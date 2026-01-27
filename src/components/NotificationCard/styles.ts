import Colors from 'AppTheme/colors';
import FONTS_FMALIY from 'AppTheme/fonts';
import { moderateScale } from 'AppUtils/scalingUtils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    padding: moderateScale(16),
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: moderateScale(10),
    gap: moderateScale(10),
    marginBottom: moderateScale(25),
  },
  titleView:{
    width:"80%"
  },
  title: {
    fontSize: moderateScale(16),
    fontFamily: FONTS_FMALIY[600],
    color: Colors.black,
  },
  description: {
    fontSize: moderateScale(12),
    fontFamily: FONTS_FMALIY[400],
    color: Colors.border,
  },
  cardHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: moderateScale(10),
    borderColor: Colors.border,
  },
  subTitle: {
    fontSize: moderateScale(14),
    fontFamily: FONTS_FMALIY[500],
    color: Colors.black,
  },
  checkBoxView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(8),
  },
  checkBox: {
    height: moderateScale(18),
    width: moderateScale(18),
  },
  label: {
    fontFamily: FONTS_FMALIY[400],
    fontSize: moderateScale(14),
    color: Colors.textPrimary,
  },
});

export default styles;
