import {createStore,applyMiddleware} from 'redux'
import {createUser,addContact} from './action.js'
import reduce from './reducer'

const thunk=store=>next=>action=>{
if(action.type==='function'){
action(store.dispatch)
}else{
next(action)
}
}



let DEFAULT_STATE={users:{},contacts:[],}


let store=createStore(reduce,DEFAULT_STATE,applyMiddleware(thunk))
/*
store.dispatch(createUser({foo:'foo'}))
store.dispatch(createUser ({bar:'bar'}))
store.dispatch(createUser({foo:'bar'}))
*/
//console.log(store.getState())
//console.log("\n \n")

store.dispatch(addContact({name:'David Malan', phone:1234567890}))
store.dispatch(addContact({name:'Jordan hayashi', phone:123456789}))
store.dispatch(addContact({name:'Shintu Tiwari', phone:1}))


export default store
