import React from 'react';
import {StyleSheet,Text ,View ,Button,} from 'react-native';
import {createStackNavigator, createSwitchNavigator , createBottomTabNavigator } from 'react-navigation';
import {Constants} from 'expo';
import Ionicons from "react-native-vector-icons/Ionicons";


import contacts from './contacts'
import ContactListScreen from './screen/ContactList.js'
import AddContactScreen from './screen/AddContact.js'
import LoginScreen from './screen/Login.js'
import SettingsScreen from './screen/Settings.js'
import ContactDetailScreen from './screen/ContactDetail.js'


export default class MainScreen extends React.Component{
  render() {
  return(
      <AppNavigator screenProps={{contacts:contacts,}}/>
    )

    }
}
export class MainTabsScreen extends React.Component{
  render() {
  return(
      <MainTabs screenProps={{contacts:contacts,}}/>
    )

    }
}

const MyStackNavigator=createStackNavigator({
  ContactList:ContactListScreen,
  AddContact:AddContactScreen,
  ContactDetails:ContactDetailScreen,

},);

MyStackNavigator.navigationOptions={
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={`ios-contacts${focused ? "" : "-outline"}`}
      size={25}
      color={tintColor}
    />
  )
}

const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Main: MainTabsScreen ,
});

const MainTabs = createBottomTabNavigator({
  Contacts:MyStackNavigator,
  Settings:SettingsScreen,
},{
    tabBarOptions: {
      activeTintColor: "#a41034"
    }
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
