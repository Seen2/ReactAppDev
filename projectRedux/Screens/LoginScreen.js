import React from 'react';
import {View,Text,KeyboardAvoidingView} from 'react-native';

import {Header,Button,Input} from '../Reusable';

export default class LoginScreen extends React.Component{
	render(){
		return (
			
			
			<KeyboardAvoidingView style={{flex:1,justifyContent:'center'}}  behaviour="padding" enable>
				<View >
					<View style={{paddingTop:30,}}>
						<Header>

							<Text style={{alignSelf:'center',fontWeight:'bold',}}>Welcome Login page</Text>
						</Header>
						<Input
							title={"Email"}
							placeholder='Email'
							style={styles.textInputStyles}
							onChange={()=>{}}
						/>
						<Input
							title={"Password"}
							placeholder='Password'
							style={styles.textInputStyles}
							onChange={()=>{}}
						/>
					</View>
					<View >
						<Button style={styles.buttonStyles} title="Login" onPress={()=>{}}/>
						<Button style={styles.buttonStyles} title="Skip" onPress={()=>this.props.navigation.navigate("main")}/>
					</View>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

styles={
	textInputStyles:{
		borderWidth:1,
		marginTop:10,
		borderRadius:5,
		height:3,
		padding:16,
		borderColor:'red',
		margin:16,
	},
	buttonStyles:{
		borderRadius:10,
		padding:200,


	}
}
