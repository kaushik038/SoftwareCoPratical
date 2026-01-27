import CustomIcon from 'AppCompoments/CustomIcon';
import { TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import styles from './styles';
import CustomText from 'AppCompoments/CustomText';

import React from 'react';

interface CircleButtonProps {
  iconName: string;
  iconStyle?: TextStyle;
  label?: string;
  onPress: () => void;
  style?: ViewStyle;
}

const CircleButton: React.FC<CircleButtonProps> = ({
  iconName,
  iconStyle,
  label,
  onPress,
  style,
}) => {
  return (
    <View style={styles.container}>
      <CustomText value={label as string} style={styles.label} />
      <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
        <CustomIcon name={iconName} style={[styles.icon, iconStyle]} />
      </TouchableOpacity>
    </View>
  );
};

export default CircleButton;
