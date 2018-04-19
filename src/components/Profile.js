import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Profile extends Component {

 
  render() {
    return (
      
            <View style={styles.container}> 
                <Text style={styles.text}>Welcome to the member Area</Text> 
            </View>
      
    );
  }

}

const styles = StyleSheet.create({
   container:{
       flex:1,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#2896d3',
   },
   text:{
       color: '#fff'
   }
});