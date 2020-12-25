import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
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
  longdescription: {
    marginVertical: 20, 
    fontSize: 16, 
    lineHeight: 24, 
  }
});

export default styles;
