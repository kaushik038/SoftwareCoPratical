import FastImage, { FastImageProps } from '@d11/react-native-fast-image';
import * as React from 'react';

const CustomImage = ({ source, style, ...props }: FastImageProps) => {
  return <FastImage {...props} style={style} source={source} />;
};

export default CustomImage;
