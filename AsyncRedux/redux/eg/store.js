import {createStore} from 'redux'

import {createUser} from './action.js'
import reduce from './reducer'
import {addContact} from './action.js'


let DEFAULT_STATE={users:{},contacts:[],}

//let store=new Store(reduce,DEFAULT_STATE)

let store=createStore(reduce,DEFAULT_STATE)

store.dispatch(createUser({foo:'foo'}))
store.dispatch(createUser ({bar:'bar'}))
store.dispatch(createUser({foo:'bar'}))

console.log(store.getState())
console.log("\n \n")

store.dispatch(addContact({name:'David Malan', phone:1234567890}))
store.dispatch(addContact({name:'Jordan hayashi', phone:123456789}))
store.dispatch(addContact({name:'Shintu Tiwari', phone:1}))

console.log(store.getState())

export default store


//const {addContact} = require('action')
//const {reduce}=require('reducer')
//const {createUser} = require('action')


/*

class Store {

  constructor(reducer,initialstate){
    this.state=initialstate
    this.reducer=reducer
  }

  dispatch(update){
    this.state=this.reducer(this.state,update)

  }

  getstate(){
    return this.state
  }
}

*/

 
