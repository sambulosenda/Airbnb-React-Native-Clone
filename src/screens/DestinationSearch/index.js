import React, {useState} from 'react';
import {Text, View, TextInput, FlatList, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import searchResults from '../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import SuggestionRow from './SuggestionRow';

const DestinationSearch = () => {
  const navigation = useNavigation();

  const [inputText, setinputText] = useState([]);

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        style={{
          textInput: styles.textinput,
        }}
        query={{
          key: 'AIzaSyAXm2cWZ4jRdxfnoPM1s2JUuuj2Us8a01s',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
      />
    </View>
  );
};
export default DestinationSearch;
