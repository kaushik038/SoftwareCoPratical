import * as React from 'react';
import { TextInput, TextStyle, View, ViewStyle } from 'react-native';
import styles from './styles';
import CustomIcon from 'AppCompoments/CustomIcon';

interface CustomInputProps {
  value: string;
  onTextChange: (value: string) => void;
  leftIcon?: string;
  rightIcon?: string;
  leftIconStyle?: TextStyle;
  rightIconStyle?: TextStyle;
  style?: ViewStyle;
  placeholderText?: string;
  placeholderTextColor?: string;
  onRightIconPress?: () => void;
  secureTextEntry?: boolean;
}
const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onTextChange,
  leftIcon,
  rightIcon,
  leftIconStyle,
  rightIconStyle,
  style,
  placeholderText,
  placeholderTextColor,
  onRightIconPress,
  secureTextEntry,
}) => {
  return (
    <View style={[styles.inputView, style]}>
      {leftIcon && <CustomIcon name={leftIcon} style={leftIconStyle} />}
      <TextInput
        defaultValue={value}
        onChangeText={onTextChange}
        style={styles.input}
        placeholder={placeholderText}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
      />
      {rightIcon && (
        <CustomIcon
          name={rightIcon}
          style={rightIconStyle}
          onPress={onRightIconPress}
        />
      )}
    </View>
  );
};

export default CustomInput;
