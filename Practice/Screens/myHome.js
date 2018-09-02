import React, { Component } from 'react';
import { TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class MyHomeScreen extends React.Component {
	static navigationOptions = {
		drawerLabel: 'Home',
		drawerIcon: ({ tintColor }) => (
			<Ionicons
				name={`ios-home${false ? '' : '-outline'}`}
				size={30}
				color="#2dbabc"
			/>

		),
	};

	render() {
		return (
			<TouchableOpacity
				onPress={() => this.props.navigation.toggleDrawer()}
			>
				<Ionicons
					name={`ios-menu${false ? '' : '-outline'}`}
					size={30}
					color="#2dbabc"
				/>

			</TouchableOpacity>
		);
	}
}


