import React from 'react';
import {View,Button,TextInput,Text,KeyboardAvoidingView} from 'react-native';
import expo from 'expo';



export default class LoginScreen extends React.Component{
	state={
		userName:'',
		password:'',
	}

 render(){
 	return(
		<KeyboardAvoidingView style={styles.container} behavior="padding" enabled >
			<View>

				<View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10,}}>


					<Text style={{marginRight:30,fontSize:20,}}> Email </Text>
					<TextInput
						style={{borderColor:"#2dbabc",borderWidth:2,borderRadius:5,flex:1, width:70,}}
						value={this.state.userName}
						placeholder="example@domain.com"
						onChangeText={(value)=>this.setState({userName:value})}

					/>
				</View>

				<View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10,}}>
					<Text style={{fontSize:20}}> Password </Text>
					<TextInput
						style={{borderColor:"#2dbabc",borderWidth:2,borderRadius:5,flex:1,width:70,}}
						value={this.state.password}
						placeholder="Password"
						onChangeText={(value)=>this.setState({password:value})}

					/>
				</View>
				<Button color='#2dbabc'  title="Login" onPress={()=>this.props.navigation.navigate('stack')} />
			</View>
		</KeyboardAvoidingView>
	)
	}
}

const styles = {
	container:{
		flex:1,
		paddingTop:expo.Constants.statusBarHeight,
		justifyContent:'center',
		margin:10,

	}
}

