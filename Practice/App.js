import React, { Component } from 'react';
import { TouchableOpacity,Image,Button, Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import {createSwitchNavigator,createDrawerNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'

import MyHomeScreen from './Screens/myHome';
import LoginScreen from './Screens/login';
import MySettingsScreen from './Screens/settings';
import MyNotificationsScreen from './Screens/notifications';
import LogoutScreen from './Screens/logout';

export default class App extends React.Component{
 render(){
	 return(
	<View style={{flex:1,paddingTop:100,}}>
		<MyAppNavigator />
	</View>
	)
	}
}

export class MyApp extends React.Component{
	render(){
		return ( 
			<MyDrawer />
		);
	}
}

export const MyAppNavigator=createSwitchNavigator({
	login:LoginScreen,
	App:MyApp,
})

const MyDrawer = createDrawerNavigator({
	Home: {
		screen: MyHomeScreen,
	},
	Notifications: {
		screen: MyNotificationsScreen,
	},
	Settings:{
		screen:MySettingsScreen,
	},
	logout:{
		screen:LogoutScreen,
	},

});


