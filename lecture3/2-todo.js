import React, { Component } from 'react';
import { Button, Text, ScrollView, StyleSheet,View,Switch } from 'react-native';
let id=0

const styles=StyleSheet.create({
  todoContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  fill:{
    flex:1,
    justifyContent:'space-between',

  }

})

const Todo = props => (
  <View style={[styles.appContainer,]} >
        <Switch   onValueChange={props.onToggle} value={props.todo.checked}  />
        <Text >{props.todo.text}</Text>

        <Button  onPress={props.onDelete} color="#841584" title="Delete" />

  </View>
)
export default class App extends Component {
  constructor(){
    super()
    this.state={
        todos:[],
    }
  }
  addTodo(){
    id++
    const text= `TODO number ${id}`
    this.setState({todos:[...this.state.todos,{text:text, id:id, checked:false,}],})
}

  removeTodo(id){
    this.setState({todos:this.state.todos.filter(todo =>todo.id!==id)})
  }

  toggleTodo(id){
    this.setState({todos:this.state.todos.map(todo=>
      {
        if(todo.id === id){
        return {
                checked :!todo.checked,
                text : todo.text,
                id : todo.id,
        }
      }
    return todo
  }
    )})
  }

  render(){
    return(
    <View >
      <Text> No.of todo={this.state.todos.length} </Text>
      <Text> No.of checked todo={this.state.todos.filter(todo =>(todo.checked !== false)).length}</Text>

        <Button onPress={() => this.addTodo() } title="AddTodo"/>
      <ScrollView >
                   {this.state.todos.map(todo => (<Todo
                      todo={todo}
                      onDelete={()=>this.removeTodo(todo.id)}
                      onToggle={()=>this.toggleTodo(todo.id)}
                      />))}

      </ScrollView>
    </View>
  )
  }
}
