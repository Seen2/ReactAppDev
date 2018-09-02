import React from 'react';
import {TextInput,Text,View} from 'react-native';

class Input extends React.Component{
	render(){
		return(
			<View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
				{this.props.title?<Text style={styles.titleStyles}>{this.props.title} </Text>:null}

				<TextInput
					placeholder={this.props.placeholder}
					style={styles.textInputStyles}
					onChange={this.props.onChange}
				/>
			</View>
		);
	}
}

const styles={
	textInputStyles:{
		flex:1,
		borderWidth:1,
		height:40,
		borderRadius:5,
		borderColor:'red',
		margin:8,
		backgroundColor:'#eee',
	},
	titleStyles:{
		fontSize:25,
		margin:8,

	}

}
export {Input} 
