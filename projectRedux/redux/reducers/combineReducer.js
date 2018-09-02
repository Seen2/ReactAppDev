import {createStore,combineReducers} from 'redux';

const reducers=combineReducers({
	log: ()=>({})
})


export const  store=createStore(reducers)

