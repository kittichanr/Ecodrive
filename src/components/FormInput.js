import React, { Component } from 'react';
 
import { StyleSheet, View, Button, TextInput, Alert} from 'react-native';
 
export default class Mynewproject extends Component {
 
  constructor()
    {
        super();
 
        this.state = 
          { 
 
            TextInputValue: ''
 
          }
    }
 
  componentDidUpdate(){
 
 
  }
 
 render() {
 
   return (
 
      <View style={styles.MainContainer}>
 
 
          <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Enter value fuelrate"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ TextInputValue: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Enter value fuelrate"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ TextInputValue: text })} } 
            />
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Enter value fuelrate"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ TextInputValue: text })} } 
            />

          <View style={{marginBottom : 10}}>
 
            <Button title='Call Normal If-Else' onPress={this.componentDidUpdate} />
 
          </View>
      
      </View>
 
           
   );
 }
}
 
const styles = StyleSheet.create({
 
  MainContainer :{
      
      flex:1,
      justifyContent: 'center',
      padding: 10,
  
  },
 
  TextInputStyle:
    {
      width: '100%',
      borderWidth: 1,
      borderColor: '#009688',
      height: 40,
      borderRadius: 10,
      marginBottom: 10,
      textAlign: 'center',
    }
 
});
