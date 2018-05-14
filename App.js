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
import FormInput from './src/components/FormInput'

const Application = StackNavigator({
Home:{ screen: Login},
DisplayValue:{screen : DisplayValue},
},  { navigationOptions :{
      header: false,
    }
  }
);

export default class App extends Component {
  render() {
    return (
        <Application/>
    );
  }
}

