import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native'
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


