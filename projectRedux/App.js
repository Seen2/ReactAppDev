/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';

import {store} from './redux/reducers/combineReducer';
import Main from './Main.js';

export default class App extends Component {
	
	render() {
		console.log(store.getState())
	  return (
		  <Provider store={store}>
			  <Main />
		  </Provider>
    );
  }
}

