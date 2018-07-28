import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import {Constants} from 'expo'


export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style ={styles.container}>
        <Text style={{fontSize:18 , color:'red', fontWeight:'bold'}}>you are currently logout</Text>
        <Button
          title="login"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',

  },
  color:{
    borderColor:'red'
  }

});
