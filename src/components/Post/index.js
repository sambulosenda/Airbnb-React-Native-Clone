import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />
      <Text style={styles.bedrooms}>1 Bed 1 Bed Room</Text>

      <Text style={styles.description} numberOfLines={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldprice}>£32</Text>
        <Text style={styles.newprice}>  £28 </Text>/Night
      </Text>

      <Text style={styles.totalprice}>£248 total</Text>
    </View>
  );
};

export default Post;
