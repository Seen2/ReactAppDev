import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import {Constants} from 'expo'

import MainScreen from './MainView.js';


//debugger;
export default class App extends React.Component {

  render() {
    //console.log(this.state.contacts)
    return (

        <MainScreen  />

    );
  }
}
