import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import styles from './styles';

const GuestScreen = () => {
  const [adults, setadults] = useState(6);
  const [children, setchildren] = useState(0);
  const [infants, setinfants] = useState(0);
  return (
    <View>
      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Adults</Text>
          <Text style={{color: 'lightgrey'}}>Ages 13 or above</Text>
        </View>

        <View
        
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            
          }}>
          <Pressable
            style={styles.button}
            onPress={() => setadults(Math.max(0, adults - 1))}>
            <Text>-</Text>
          </Pressable>
          <Text>{adults}</Text>
          <Pressable
            style={styles.button}
            onPress={() => setadults(adults + 1)}>
            <Text>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Children</Text>
          <Text style={{color: 'lightgrey'}}>Ages 13 or above</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable
            style={styles.button}
            onPress={() => setchildren(Math.max(0, children - 1))}>
            <Text>-</Text>
          </Pressable>
          <Text>{children}</Text>
          <Pressable
            style={styles.button}
            onPress={() => setchildren(children + 1)}>
            <Text>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Infants</Text>
          <Text style={{color: 'lightgrey'}}>Ages 13 or above</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Pressable
            style={styles.button}
            onPress={() => setinfants(Math.max(0, infants - 1))}>
            <Text>-</Text>
          </Pressable>
          <Text>{infants}</Text>
          <Pressable
            style={styles.button}
            onPress={() => setinfants(infants + 1)}>
            <Text>+</Text>
          </Pressable>
        </View>

     
      </View>


    </View>
  );
};

export default GuestScreen;
