import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

  class Button extends React.Component{
	render(){
		return (
			<TouchableOpacity
				style={styles.container}
				onPress={this.props.onPress}
			>
				<Text style={styles.title}> 
					{this.props.title}
				</Text>
			</TouchableOpacity>
		);
	}
}

const styles={
	title:{
		fontSize:20,
		alignSelf:'center',
		fontWeight:'bold',
	},
	container:{
		marginTop:10,
		marginLeft:8,
		marginRight:8,
		justifyContent:'center',
		height:40,
		margin:2,
		borderWidth:2,
		borderRadius:5,
		borderColor:'red',
	},

}

export {Button}
