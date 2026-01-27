import { StyleSheet } from 'react-native';
import Colors from 'theme/colors';
import { moderateScale } from 'utils/scalingUtils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: moderateScale(241),
    width: moderateScale(246),
  },
  inputView: {
    marginTop: moderateScale(35),
    width: '100%',
    paddingHorizontal: moderateScale(20),
    gap: moderateScale(30),
  },
  leftIcon: {
    fontSize: moderateScale(20),
    color: Colors.gray400,
  },
  rightIcon: {
    fontSize: moderateScale(20),
    color: Colors.gray300,
  },
});

export default styles;
