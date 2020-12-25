import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import styles from './styles';

const DetailedPost = (props) => {
  const post = props.post;
  return (
    <ScrollView>
  <View style={styles.container}>
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

      <Text style={styles.longdescription}>{post.description}</Text>
    </View>

    </ScrollView>
  
  );
};

export default DetailedPost;
