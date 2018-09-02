import React from 'react';
import {View,Text} from 'react-native';
import {createSwitchNavigator} from 'react-navigation';

import LoginScreen from './Screens/LoginScreen';
import MainScreen from './Screens/MainScreen';

export default class Main extends React.Component{
	render(){
		return (
			<MyNavigator/>
		);
	}
}
const MyNavigator=createSwitchNavigator({
	login:LoginScreen,
	main:MainScreen,
}
);
