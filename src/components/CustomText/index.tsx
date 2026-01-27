import { Text, TextStyle } from 'react-native';
import styles from './styles';
import React from 'react';

interface CustomTextProps {
  value: string;
  style?: TextStyle;
}

const CustomText: React.FC<CustomTextProps> = ({ value, style }) => {
  return <Text style={[styles.defaultText, style]}>{value}</Text>;
};

export default CustomText;
