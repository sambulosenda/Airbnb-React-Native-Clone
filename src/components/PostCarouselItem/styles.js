import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 150,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,

  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
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
  },

  prices: {
    fontSize: 15,
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
