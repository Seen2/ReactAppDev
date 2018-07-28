import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {Constants} from 'expo'



export default class App extends React.Component {
  render() {
    return (

        <MyNavigator  />

    );
  }
}
export  class ScreenComponentOne extends React.Component {
  render() {
    return (
      <View style ={styles.container,{borderWidth: 18,borderColor: 'red',flex: 1,justifyContent: 'center',alignItems: 'center',paddingTop: Constants.statusBarHeight,}}>
        <Button
          title="Go to two"
          onPress={() => this.props.navigation.navigate('routeNameTwo')}
        />
      </View>
    );
  }
}
export  class ScreenComponentTwo extends React.Component {
  render() {
    return (
      <View style ={styles.container}>
        <Button
          title="Go to one"
          onPress={() => this.props.navigation.navigate('routeNameOne')}
        />
      </View>
    );
  }
}

const MyNavigator=createStackNavigator({
  routeNameOne:ScreenComponentOne,
  routeNameTwo:ScreenComponentTwo,
});


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
