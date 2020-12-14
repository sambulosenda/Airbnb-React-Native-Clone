import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    button:{
        borderWidth: 1,
        width: 30, 
        height: 30,
        borderRadius: 30, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderColor: "lightgrey",
        marginHorizontal:20,
        
    }, 
    row: {
        flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
          marginHorizontal: 20,
          borderBottomWidth: 1,
          borderBottomColor: 'lightgrey',
    }, 
    submitbutton:{

        marginBottom: 10,
        borderWidth: 1,
        backgroundColor: 'red', 
        margin: 20, 
        height: 50,
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: 'grey',


    }

 
});

export default styles

