import React, {useState} from 'react';
import {Text, View, TextInput, FlatList, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

import searchResults from '../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';

const DestinationSearch = () => {
  const navigation = useNavigation();

  const [inputText, setinputText] = useState([]);

  return (
    <View style={styles.container}>
    {/* Input component*/}
    <TextInput
      style={styles.textinput}
      placeholder="Where are you going?"
      value={inputText}
      onChangeText={setinputText}
    />

    {/*  List of destination */}
    <FlatList
      data={searchResults}
      renderItem={({item}) => (
        <Pressable onPress={() => navigation.navigate('Guests')} style={styles.row}>
          <View style={styles.iconContainer}>
            <Entypo name={"location-pin"} size={30} />
          </View>
          <Text style={styles.locationText}>{item.description}</Text>
        </Pressable>
      )}
    />
  </View>
);
};
export default DestinationSearch;
