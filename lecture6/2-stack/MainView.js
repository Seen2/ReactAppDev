import React from 'react';
import {StyleSheet,Text ,View ,Button,} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {Constants} from 'expo'

import contacts from './contacts'
import ContactListScreen from './screen/ContactList.js'
import AddContactScreen from './screen/AddContact.js'

export default class MainScreen extends React.Component{
  render() {
  return(
      <MyNavigator screenProps={{contacts:contacts,}}/>
    )

    }
}

const MyNavigator=createStackNavigator({
  ContactList:ContactListScreen,
  AddContact:AddContactScreen,

});

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
