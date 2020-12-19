import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5, 
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white', 
    borderRadius: 10, 
    overflow: 'hidden'
  },
  image: {
    height: '100%',
    aspectRatio: 1 / 1,
    resizeMode: 'cover',
  },

  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },

  description: {
    fontSize: 18,
    lineHeight: 26,
  },

  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldprice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  newprice: {
    fontWeight: 'bold',
  },
  totalprice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
});

export default styles;
