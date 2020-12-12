import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  title: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 30,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  button: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 30,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  searchbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: Dimensions.get('screen').width - 20,
    height: 60,
    borderRadius: 30, 
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center', 
    position: 'absolute',
    top: 20,
    zIndex: 1000,

  }, 

  searchbuttonText: {

  }
});

export default styles

