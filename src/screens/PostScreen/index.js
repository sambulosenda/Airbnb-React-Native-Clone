import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DetailedPost from '../../components/DetailedPost'
import places from '../../assets/data/feed'

import {useRoute} from '@react-navigation/native'

const post = places[0]
const index = (props) => {
    const route = useRoute();

    console.log(route.params)

    const post = places.find(place => place.id === route.params.postId);
    return (
        <View style={{backgroundColor: "white"}}>
            <DetailedPost post={post}/>
        </View>
    )
}

export default index

const styles = StyleSheet.create({})
