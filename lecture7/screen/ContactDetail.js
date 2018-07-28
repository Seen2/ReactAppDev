import React from 'react';
import {Text, View,} from 'react-native';



export default class ContactDetailsScreen extends  React.Component{
  static navigationOptions={
    headerTitle:"Details",
    headerTintColor:'red',
  }
  render(){

    return(
      <View>
        <Text style={{fontSize:18, fontWeight:'bold',}}>Name:{this.props.navigation.getParam('contact').name+"\n"}</Text>

        <Text style={{fontSize:18, fontWeight:'bold',}}>Phone:{this.props.navigation.getParam('contact').phone}</Text>

      </View>

    )
  }
}
