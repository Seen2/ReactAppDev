import React from 'react';
import { render } from 'react-dom';
import Hello from './App';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
const Todo=props =>(
  <li>

    <span>{props.todo.text}</span>
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
    this.setState({todos:[...this.state.todos,{text:text}],
  })


  }


  render(){
    return(
    <div>
      <li>
          <button onClick={() => this.addTodo()}>AddTodo</button>
          <ul>{this.state.todos.map(todo =>(<Todo todo={todo} />))}</ul>

      </li>
    </div>
  );
  }
}


render(<App />, document.getElementById('root'))
