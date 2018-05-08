import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';


import DisplayValue from './DisplayValue';

import RNGooglePlaces from 'react-native-google-places';

class Map extends Component {
    openSearchModal() {
      RNGooglePlaces.openPlacePickerModal()
      .then((place) => {
          console.log(place);
          // place represents user's selection from the
          // suggestions and it is a simplified Google Place object.
      })
      .catch(error => console.log(error.message));  // error is a Javascript Error object
    }
  
    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.openSearchModal()}
          >
          
            <Text>Open Place Picker</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
  export default Map;

  const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
    },
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
    },
    button:{
      marginBottom: 20
    }
});