import React from 'react';
import { render } from 'react-dom';
import hello from './App';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};


const App = function(props) {
  return (
    <div style={styles}>
      <h2> {props.count}  </h2>
    </div>
  )
}
let count = 0

const App2 =(props) => (
  <div style={styles}>
      <h3>this is the second part of the app {props.count**2}</h3>
  </div>


);



setInterval(
  function() {render(<App2 count={count++} />, document.getElementById('root'))},
  1000
)
