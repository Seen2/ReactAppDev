import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Button,TextInput,View} from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import {Constants} from 'expo'


export default class LoginScreen extends React.Component {
  state={
    username:'',
    password:'',
  }
  handleUsername=(username)=>
  {
    this.setState({username})
  }
  handlePassword=(password)=>
  {
    this.setState({password})
  }
  render() {
    return (

      <View style={styles.container}>
          <Text style={styles.texts} >you are currently logout {'\n please login'} </Text>

        <KeyboardAvoidingView  >
          <TextInput
           style={styles.textinput}
           value={this.state.username}
           onChangeText={this.handleUsername}
           placeholder="Username"
            />
            <TextInput
             style={styles.textinput}
             value={this.state.password}
             onChangeText={this.handlePassword}
             placeholder="Username"
              />
            <Button onPress={() => this.props.navigation.navigate('Main',{username:this.state.username,password:this.state.password,})} 
              title="login" />
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
