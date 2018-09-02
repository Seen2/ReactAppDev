import React, { Component } from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
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
		 <View >
			 <TouchableOpacity
				 onPress={() => this.props.navigation.toggleDrawer()}
			 >
				 <Ionicons
					 name={`ios-menu${false ? '' : '-outline'}`}
					 size={30}
					 color="#2dbabc"
				 />

		 	</TouchableOpacity>

		</View>


    );
  }
}


