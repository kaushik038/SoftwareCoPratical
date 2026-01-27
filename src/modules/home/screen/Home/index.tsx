import { ScrollView, Text, TextStyle, View } from 'react-native';
import styles from './styles';
import React from 'react';
import CustomText from 'AppCompoments/CustomText';
import Carousel from 'AppCompoments/Carousel';
import StoreCarousel from 'AppCompoments/StoreCarousel';
import Statistics from 'AppCompoments/Statistics';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel />
        <StoreCarousel />
        <Statistics />
      </ScrollView>
    </View>
  );
};

export default Home;
