import Colors from 'AppSrc/theme/colors';
import FONTS_FMALIY from 'AppSrc/theme/fonts';
import { moderateScale } from 'AppSrc/utils/scalingUtils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: moderateScale(40),
    fontSize: moderateScale(14),
    fontFamily: FONTS_FMALIY[500],
    color: Colors.black,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: moderateScale(56),
    borderRadius: moderateScale(16),
    borderWidth: 1,
    borderColor: Colors.gray200,
    paddingHorizontal: moderateScale(20),
    gap: moderateScale(12),
  },
});

export default styles;
