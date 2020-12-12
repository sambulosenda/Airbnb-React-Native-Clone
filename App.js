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
  Picker,
} from 'react-native';

import feed from './src/assets/data/feed'
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';

const post1 = feed[0];
const post2 = feed[1];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Post post={post1}/>
        <Post post={post2}/>
     
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
