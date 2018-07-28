import React, { Component } from 'react';
import { Button, Text, ScrollView, StyleSheet,View,Switch } from 'react-native';
const styles=StyleSheet.create({
  appcont:{
    alignItems:'center',
    justifyContent:'center',
    flex:1,
  },
  count:{
    fontSize:100

  }
})

class Counter extends React.Component{
  constructor(){
    super()
      this.state={
        count:0,
      }
    }

    inc = ()=> {
      this.setState(prevState =>({count:prevState.count+1}))
    }

    componentDidMount() {
      setInterval(this.inc, 1000)
    }

    render(){
      return (
        <View style={styles.appcont} >
          <Text style={styles.count}>{this.state.count}</Text>
        </View>
      )
    }



}
export default class App extends React.Component {

  render(){
    return(
      <Counter  />

    )
    }
}
