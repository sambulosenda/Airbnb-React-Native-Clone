/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
 
  StatusBar,
  Picker,
} from 'react-native';
import Router from './src/navigation/Router';

import feed from './src/assets/data/feed';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearch from './src/screens/DestinationSearch';
import GuestScreen from './src/screens/Guests';

const post1 = feed[0];
const post2 = feed[1];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
