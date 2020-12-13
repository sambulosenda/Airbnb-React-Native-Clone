import React from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'

import feed from '../../assets/data/feed'
import Post from '../../components/Post'

const SearchResultsScreen = () => {
    return (
        <View>
            <FlatList 
            data={feed}
            renderItem={({item}) => <Post post={item} />}
            />
        </View>
    )
}

export default SearchResultsScreen

const styles = StyleSheet.create({})
