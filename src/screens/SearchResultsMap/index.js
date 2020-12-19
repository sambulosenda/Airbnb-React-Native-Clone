import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

import places from '../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import PostCorouselItem  from '../../components/PostCarouselItem'
const SearchResultsMap = (props) => {
  const [selectedPlaceId, setselectedPlaceId] = useState(null);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map((place) => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setselectedPlaceId(place.id)}
          />
        ))}
      </MapView>


      <View style={{position: 'absolute', bottom: 40}}>
        <PostCorouselItem post={places[0]} />

      </View>
    </View>
  );
};

export default SearchResultsMap;

const styles = StyleSheet.create({});
