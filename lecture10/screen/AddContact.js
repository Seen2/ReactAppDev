import React from 'react';
import { TextInput,StyleSheet,KeyboardAvoidingView,Button,Text,View,} from 'react-native';
import {Constants} from 'expo';

import Form from '../Form'

export default class AddContactScreen extends React.Component{


  static navigationOptions=({navigation})=>({
    headerTitle:"New Contact",
    headerRight:<Button
      title="toggle"
      onPress={()=>navigation.navigate('ContactList')}
      />,
    headerTintColor:'red',
  })

  render(){
    return(
          <View style={styles.container}>

            <Form
              next={()=>this.props.navigation.navigate('ContactList')}
              />
          </View>
        )
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:Constants.statusBarHeight
  },
  textinput:{
    padding:10,
    borderWidth:5,
    borderColor:"black",
  }
});
