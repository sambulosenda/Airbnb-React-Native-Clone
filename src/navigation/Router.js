import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DestinationSearch from '../screens/DestinationSearch';
import GuestScreen from '../screens/Guests';
import PostScreen from '../screens/PostScreen';

import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearch}
          options={{title: 'Search your destination'}}
        />

        <Stack.Screen
          name={'Guests'}
          component={GuestScreen}
          options={{title: 'How many people?'}}
        />

        <Stack.Screen
          name={'Post'}
          component={PostScreen}
          options={{title: 'Accommodation'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
