import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    height: '100%',
  },
  textinput: {
    marginTop: 100,
    fontSize: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    paddingBottom: 10,
  },

  iconContainer: {
    backgroundColor: '#f7f7f7',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
});

export default styles;
