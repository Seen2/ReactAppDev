import React from 'react';
import {View,Text,} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {MyAppNavigator} from '../App.js';

export default class  LogoutScreen extends React.Component{
	static navigationOptions = {
		drawerLabel: 'Logout',
		drawerIcon: ({ tintColor }) => (
			<Ionicons
				name={`ios-person${false ? '' : '-outline'}`}
				size={30}
				color="#2dbabc"
			/>

		),
	};

	render() {
		return (
			<MyAppNavigator />

		);
	}
}


