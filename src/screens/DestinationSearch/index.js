import React, {useState} from 'react';
import {Text, View, TextInput, FlatList} from 'react-native';
import styles from './styles';

import searchResults from '../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';

const DestinationSearch = () => {
  const [inputText, setinputText] = useState([]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        placeholder="Where are you going"
        value={inputText}
        onChangeText={setinputText}
      />

      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View  style={styles.iconContainer}>
            <Entypo name='location-pin' size={24} />


            </View>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearch;
