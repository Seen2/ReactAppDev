import React from 'react';
import {View,Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class  MySettingsScreen extends React.Component{
	static navigationOptions = {
		drawerLabel: 'Settings',
		drawerIcon: ({ tintColor }) => (
			<Ionicons
				name={`ios-options${false ? '' : '-outline'}`}
				size={30}
				color="#2dbabc"
			/>

		),
	};

	render() {
		return (
			<View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
				<Text> Comming Soon </Text>
			</View>
		);
	}
}


