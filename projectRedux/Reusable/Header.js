import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends React.Component {
	render() {
		return (
			<View style={styles.post} >
				{this.props.children}
			</View>

		);
	}
}

const styles = {
	post:{
		height:60,
		justifyContent:'center',
		margin:4,
		borderWidth:1,
		bordeRadius:5,
		backgroundColor: '#eee',

	}
}
export {Header} 
