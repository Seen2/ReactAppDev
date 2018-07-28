import React from 'react';
import { TextInput,StyleSheet,KeyboardAvoidingView,Button,Text,View,} from 'react-native';
import {Constants} from 'expo';

import Form from '../Form'

export default class AddContactScreen extends React.Component{


  save= contact =>{
    contact.key=this.props.screenProps.contacts.length
    this.props.screenProps.contacts=[...this.props.screenProps.contacts,contact]
    this.sort()
  }
  sort=()=>{
      this.props.screenProps.contacts.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  }
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
              add={this.save}
              next={()=>this.props.navigation.navigate('ContactList',{contacts:this.props.navigation.getParam('contacts'),})}
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
