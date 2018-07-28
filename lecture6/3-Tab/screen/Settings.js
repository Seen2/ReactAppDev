import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import {Constants} from 'expo'
import Ionicons from "react-native-vector-icons/Ionicons";



export default class SettingsScreen extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons
        name={`ios-options${focused ? "" : "-outline"}`}
        size={25}
        color={tintColor}
      />
    )
  };


  render() {
    return (
      <View style ={styles.container}>
        <Text style={{fontSize:18 , color:'red', fontWeight:'bold'}}>Comming Soon</Text>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',

  },
  color:{
    borderColor:'red'
  }

});
