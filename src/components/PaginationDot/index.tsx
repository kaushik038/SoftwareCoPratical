import { View } from 'react-native';
import styles from './styles';
import React from 'react';

interface PaginationDotsProps {
  data: any;
  activeIndex: number;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({
  data,
  activeIndex,
}) => {
  return (
    <View style={styles.dotContainer}>
      {data?.map((_: any, index: number) => (
        <View
          key={index}
          style={[styles.dot, activeIndex === index && styles.activeDot]}
        />
      ))}
    </View>
  );
};

export default PaginationDots;
