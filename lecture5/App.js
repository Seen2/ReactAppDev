import React from 'react';
import { StyleSheet, Text, View, ScrollView ,Button } from 'react-native';
import {Constants} from 'expo'

import Row from './sectionlist.js';
import contacts from './contacts.js';
import Form from './Form.js';
export default class App extends React.Component {

  state = {
    showcontact: true,
    addcontact: false,
    contacts:contacts,

  }
  toggle =()=>{
    this.setState(prevState =>({showcontact:!prevState.showcontact}))
    console.log(this.state.contacts)


  }
  add= ()=> {
    console.log("inside "+ String(this.state.addcontact))
    this.setState(prevState =>({addcontact:!prevState.addcontact}))
    this.setState(prevState =>({showcontact:!prevState.showcontact}))
  }
  sort=()=>{
    console.log("inside \n")

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
  save= contact =>{
    contact.key=this.state.contacts.length
    this.setState(prevState=>({contacts:[...prevState.contacts,contact,]}))
    this.setState(prevState =>({addcontact:!prevState.addcontact}))

    this.sort()

  }

  render() {
  return(
    <View style ={styles.container}>
      <Button title="toggle" onPress={this.toggle} />
      <Button title="add contact" onPress={this.add} />
        {this.state.addcontact?
          <Form add={this.save} /> : null
        }
      {this.state.showcontact ?
        <Row contacts={this.state.contacts}/>
          : null
        }

      </View>
    )
    }
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  //  alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    //justifyContent: 'center',

  },
  text:{
    fontSize: 20,
  },
});
