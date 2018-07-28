import React from 'react';
import { StyleSheet, Text, View, ScrollView ,Button } from 'react-native';
import {Constants} from 'expo';


import Row from '../sectionlist';

export default class ContactListScreen extends React.Component {

  static navigationOptions=({navigation})=>({
    headerTitle:"Contacts",
    headerRight:<Button
      title="Addcontact"
      onPress={()=>navigation.navigate('AddContact')}
      />,
    headerTintColor:'red',
  })
/*
	check=()=>{
		console.log('checked..')
	}
	*/
  render(){
		//this.check()
    return(
        <View style ={styles.container}>

            <Row
              OnSelect={(props)=>this.props.navigation.navigate('ContactDetails',{contact:props})}
              contacts={this.props.screenProps.contacts}
              />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',

  },
  color:{
    borderColor:'red'
  }

});
