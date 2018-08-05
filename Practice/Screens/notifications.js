import React, { Component } from 'react';
import {Text,View} from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'


export default class MyNotificationsScreen extends React.Component {
	static navigationOptions = {
		drawerLabel: 'Notifications',
		drawerIcon: ({ tintColor }) => (
			<Ionicons
				name={`ios-notifications${false ? '' : '-outline'}`}
				size={30}
				color="#2dbabc"
			/>

		),
	};

  render() {
	  return (
		  <View>
			  <Text>Coming Soon </Text>
		  </View>


    );
  }
}


