import React from 'react';
import {Text, View, Pressable, ImageBackground, Dimensions} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        style={styles.searchbutton}
        onPress={() => navigation.navigate('Destination Search')}>
        <Text style={styles.searchbuttonText}>Where are you going?</Text>
        <View style={{paddingRight: 10}}>
          <Fontisto name="search" size={25} color={'#f15454'} />
        </View>
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
