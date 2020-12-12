import React from 'react';
import {Text, View, Pressable, ImageBackground, Dimensions} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View>
      <Pressable
        style={styles.searchbutton}
        onPress={() => console.warn('Explore button pressed')}>
        <Text style={styles.searchbuttonText}>Where are you going?</Text>
        <Fontisto name="search" size={25} color={'#f15454'} />
      </Pressable>
      <ImageBackground
        source={require('../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore button pressed')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
