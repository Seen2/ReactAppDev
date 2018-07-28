import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {Constants} from 'expo'


const getRandomNumber=()=> Math.floor(Math.random()*10)




export default class App extends React.Component {
  render() {
    return (

        <MyNavigator  />

    );
  }
}
export  class ScreenComponentOne extends React.Component {
  static navigationOptions={
    headerTitle:"first screen",
    headerLeft:<Button title="hello" onPress={()=> alert('hello world')} />,

    //headerStyle: styles.container,
    headerTintColor:'red',
  }
  render() {
    return (
      <View style ={styles.container,{borderWidth: 18,borderColor: 'red',flex: 1,justifyContent: 'center',alignItems: 'center',paddingTop: Constants.statusBarHeight,}}>
        <Button
          title="Go to two"
          onPress={() => this.props.navigation.navigate('routeNameTwo',{randomNumber:getRandomNumber(),})}
        />
      </View>
    );
  }
}
export  class ScreenComponentTwo extends React.Component {
  static navigationOptions=({navigation})=>({
      headerTitle:`second screen ${navigation.getParam('randomNumber')}`,
      headerTintColor:'red',
      //headerStyle: styles.container,

    })

  render() {
    return (
      <View style ={styles.container}>
        <Button
          title="Go to three"
          onPress={() => this.props.navigation.navigate('routeNameThree',{randomNumber:getRandomNumber()})}
        />
      </View>
    );
  }
}
export  class ScreenComponentThree extends React.Component {

  static navigationOptions=({navigation})=>({
    headerTitle:"Third screen "+ `${navigation.getParam('randomNumber')}`,
    headerTintColor:'red',
    headerLeft:<Button title="bye" onPress={()=> alert('bye')} />
    //headerStyle: styles.container,

  })
  render() {
    return (
      <View style ={styles.container,{borderWidth: 18,borderColor: 'green',flex: 1,justifyContent: 'center',alignItems: 'center',paddingTop: Constants.statusBarHeight,}}>
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
  routeNameThree:ScreenComponentThree,
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
