import { Text, TextStyle, TextInputProps } from 'react-native';
import styles from './styles';
import React from 'react';

interface CustomTextProps {
  value: string;
  style?: TextStyle;
  numberOfLines?: number;
}

const CustomText: React.FC<CustomTextProps> = ({
  value,
  style,
  numberOfLines,
}) => {
  return (
    <Text style={[styles.defaultText, style]} numberOfLines={numberOfLines}>
      {value}
    </Text>
  );
};

export default CustomText;
