import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Button,TextInput,View} from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import {Constants} from 'expo'

import {fetchLogin} from '../Api.js'
import {login} from '../redux/action.js'
import store from '../redux/store'


export default class LoginScreen extends React.Component {
  state={
    username:'',
    password:'',
    err:'',
  }
  handleUsername=(username)=>
  {
    this.setState({username})
  }
  handlePassword=(password)=>
  {
    this.setState({password})
  }



  update=async ()=>{
  response= await login(this.state.username,this.state.password)(store.dispatch)
  console.log(response+'\n \n')
  if(response==true){
  this.props.navigation.navigate('Main')
  }
  else{

  this.setState({err:response})
  }
    }
  render()
  {

    return (
         <View style={styles.container}>
          <Text style={styles.texts} >{this.state.err}{'\n please login'} </Text>

        <KeyboardAvoidingView  >
          <TextInput
           style={styles.textinput}
           value={this.state.username}
           onChangeText={this.handleUsername}
	   placeholder="Username"
	   autoCapitalize='none'
            />
            <TextInput
             style={styles.textinput}
             value={this.state.password}
             onChangeText={this.handlePassword}
	     placeholder="Password"
	     autoCapitalize='none'

              />
	      <Button   onPress={()=>this.update()} title="login" />
        </KeyboardAvoidingView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:Constants.statusBarHeight,
    alignContent:'center'
  },
  textinput:{
    padding:8,
    borderWidth:2,
    borderColor:"#fff",
  },
  texts:{
    textAlign: 'center',
    color:'red',
    fontSize:18,
  }
});
