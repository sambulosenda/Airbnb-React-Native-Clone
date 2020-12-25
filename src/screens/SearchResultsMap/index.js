import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

import places from '../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import PostCorouselItem from '../../components/PostCarouselItem';
const SearchResultsMap = (props) => {
  const [selectedPlaceId, setselectedPlaceId] = useState(null);
  const flatList = useRef();
  const width = useWindowDimensions().width;

  useEffect(() => {
    if (!selectedPlaceId || !flatList) {
      return;
    }
    const index = places.findIndex((place) => place.id === selectedPlaceId);
    flatList.current.scrollToIndex({index});
  }, [selectedPlaceId]);
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

      <View style={{position: 'absolute', bottom: 20}}>
        <FlatList
          ref={flatList}
          data={places}
          renderItem={({item}) => <PostCorouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;

const styles = StyleSheet.create({});
