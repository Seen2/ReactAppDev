import {ADD_CONTACT} from './action.js'

import {CREATE_USER} from './action.js'

import {combineReducers} from 'redux'


//console.log("ok")
//const {CREATE_USER}= require('action')
//const {ADD_CONTACT}= require('action')
//console.log("ok")


//reducers

const merge=(state,update)=> Object.assign({},state,update)

const contactReducer=(state=[],update)=>{
	if(update.type===ADD_CONTACT){
		return ([...state,update.payload])
	}
	return state
}

const userReducer=(state={},update)=>{
	if(update.type===CREATE_USER){
		return merge(state,update.payload)
	}
	return state
}

/*
 const reduce=(state,update)=>({
	users:userReducer(state.users,update),
	contacts:contactReducer(state.contacts,update),
}
)
*/

const reduce=combineReducers({
users:userReducer,
contacts:contactReducer
})

export default reduce
