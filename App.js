/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ImageBackground,
  View,
  Pressable,
  Text,
  StatusBar,
} from 'react-native';

import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Post />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
