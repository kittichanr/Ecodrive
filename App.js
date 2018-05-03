import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/components/Login'
import Profile from './src/components/Profile'
import Map from './src/components/Map'
import DisplayValue from './src/components/DisplayValue'

const Application = StackNavigator({
Home:{ screen: Login},
Map:{screen : DisplayValue},
},  { navigationOptions :{
      header: false,
    }
  }
);

export default class App extends Component {
  render() {
    return (
        <DisplayValue/> 
    );
  }
}

