import React from 'react';
import { StyleSheet, Text, View, ScrollView ,Button } from 'react-native';
import {Constants} from 'expo';
import {connect} from 'react-redux'

import Row from '../sectionlist';

export class ContactListScreen extends React.Component {

  static navigationOptions=({navigation})=>({
    headerTitle:"Contacts",
    headerRight:<Button
      title="Addcontact"
      onPress={()=>navigation.navigate('AddContact')}
      />,
    headerTintColor:'red',
  })
  addkeys=(val,key)=>({key,...val})

  render(){
  let contacts=this.props.contacts.map(this.addkeys).sort(function(a, b) {
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

    return(
        <View style ={styles.container}>

            <Row
              OnSelect={(detail)=>this.props.navigation.navigate('ContactDetails',{contact:detail})}
              contacts={contacts}
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

const mapStateToProps=(state)=>({
contacts:state.contacts,
})


export default connect(mapStateToProps)(ContactListScreen)
