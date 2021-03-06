import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import styles from './styles';

const Post = (props) => {
  const post = props.post;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id})
  }
  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>

      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldprice}>£{post.oldPrice}</Text>
        <Text style={styles.newprice}> £{post.newPrice}</Text>/Night
      </Text>

      <Text style={styles.totalprice}>£{post.totalPrice}</Text>
    </Pressable>
  );
};

export default Post;
