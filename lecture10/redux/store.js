import {createStore} from 'redux'

import {createUser} from './action.js'
import reduce from './reducer'
import {addContact} from './action.js'


let DEFAULT_STATE={users:{},contacts:[],}


let store=createStore(reduce,DEFAULT_STATE)

store.dispatch(createUser({foo:'foo'}))
store.dispatch(createUser ({bar:'bar'}))
store.dispatch(createUser({foo:'bar'}))

console.log(store.getState())
console.log("\n \n")

store.dispatch(addContact({name:'David Malan', phone:1234567890}))
store.dispatch(addContact({name:'Jordan hayashi', phone:123456789}))
store.dispatch(addContact({name:'Shintu Tiwari', phone:1}))


export default store
