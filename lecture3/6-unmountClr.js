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
      this.interval=setInterval(this.inc, 100)
      console.log('incremented!')
    }
    componentWillUnmount(){
      clearInterval(this.interval)
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
  constructor(){
    super()
    this.state={
      stopcounter:true,
    }
  }
    onToggle = ()=>{
      this.setState(prevState => ({stopcounter:!prevState.stopcounter}))
    }


  render(){
    if(this.state.stopcounter){
      return(
      <View style={[styles.appcont,]}>
        <Counter  />

        <Button onPress={this.onToggle} title="power"/>

      </View>

    )
    }
    return(
      <View style={styles.appcont}>
        <Button onPress={this.onToggle} title="power"/>

      </View>
    )
}
}
