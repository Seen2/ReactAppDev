import React from 'react';
import { render } from 'react-dom';
import Hello from './App';
let id=0
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
const Todo=props =>(
  <li>

    <span>{props.todo.text}</span>
    <button onClick={props.onDelete}>Delete</button>
  </li>
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
    this.setState({todos:[...this.state.todos,{text:text,id:id++}],
  })
}
  removeTodo(id){
    this.setState({todos:this.state.todos.filter(todo =>todo.id!==id)
})
  }





  render(){
    return(
    <div>
      <li>
          <button onClick={() => this.addTodo()}>AddTodo</button>
          <ul>{this.state.todos.map(todo =>(<Todo todo={todo}
                  onDelete={()=>this.removeTodo(todo.id)}
                 />))}</ul>

      </li>
    </div>
  );
  }
}


render(<App />, document.getElementById('root'))
