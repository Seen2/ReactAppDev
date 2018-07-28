import React from 'react';
import { render } from 'react-dom';
import Hello from './App';
let id=0

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
const Todo=props =>(
  <div>
      <li>
        <input type="checkbox" onChange={props.onchange}></input>
        <span>{props.todo.text}</span>
        <button onClick={props.onDelete}>Delete</button>
      </li>
  </div>
)
class App extends React.Component{
  constructor(){
    super()
    this.state={
        todos:[],
    }
  }
  addTodo(){
    const text= prompt("text please..")
    this.setState({todos:[...this.state.todos,{text:text,id:id++,checked:false,}],
  })
}
  removeTodo(id){
    this.setState({todos:this.state.todos.filter(todo =>todo.id!==id)
})
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
    <div>
      <div> No.of todo={this.state.todos.length}</div>
      <div> No.of checked todo={this.state.todos.filter(todo=> (todo.checked!==true)).length}</div>

      <li>
          <button onClick={() => this.addTodo()}>AddTodo</button>
          <ul>{this.state.todos.map(todo =>(<Todo todo={todo}
                  onDelete={()=>this.removeTodo(todo.id)}
                  onchange={()=>this.toggleTodo(todo.id)}
                  
                 />))}</ul>
      </li>
    </div>
  );
  }
}


render(<App />, document.getElementById('root'))
