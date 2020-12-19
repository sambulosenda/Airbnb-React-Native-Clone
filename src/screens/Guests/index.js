import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native' 

const GuestScreen = () => {
  const [adults, setadults] = useState(6);
  const [children, setchildren] = useState(0);
  const [infants, setinfants] = useState(0);
 
  const navigation = useNavigation();

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Adults</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setadults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>

            <Pressable
              onPress={() => setadults(adults + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Children</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 2-12</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setchildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>

            <Pressable
              onPress={() => setchildren(children + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Infants</Text>
            <Text style={{color: '#8d8d8d'}}>Under 2</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setinfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 16}}>{infants}</Text>

            <Pressable
              onPress={() => setinfants(infants + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
            },
          })
        }
        style={{
          marginBottom: 20,
          backgroundColor: '#f15454',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default GuestScreen;