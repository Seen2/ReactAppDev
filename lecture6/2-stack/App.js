import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import {Constants} from 'expo'

import MainScreen from './MainView.js';



export default class App extends React.Component {
  render() {
    return (

        <MainScreen  />

    );
  }
}
