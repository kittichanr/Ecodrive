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


const Application = StackNavigator({
Home:{ screen: Login},
Profile:{screen : Profile},
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

