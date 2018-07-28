import React from 'react';
import { StyleSheet, Text, View, ScrollView ,Button } from 'react-native';
import {Constants} from 'expo';


import Row from '../sectionlist';

export default class ContactListScreen extends React.Component {
  state = {
    addcontact: false,
    contacts:this.props.screenProps.contacts,
  }
sort=()=>{
      this.setState(prevState=>prevState.contacts.sort(function(a, b) {
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
    }));
  }
  render(){
    return(
        <View style ={styles.container}>
          <Button
            title="addcontact"
            onPress={()=>this.props.navigation.navigate('AddContact')}
            />
            <Row
              contacts={this.state.contacts}
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
