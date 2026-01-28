import {
  ActivityIndicator,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import styles from './styles';
import React from 'react';
import Colors from 'AppSrc/theme/colors';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle;
  isLoading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  isLoading,
}) => {
  return (
    <TouchableOpacity style={[styles.defaultBtn, style]} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size={'small'} color={Colors.white} />
      ) : (
        <Text style={[styles.title, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
