const {createStore}=require('redux')

//action types
const CREATE_USER='AddUser'
const ADD_CONTACT='AddContact'
/*
class Store {

  constructor(reducer,initialstate){
    this.state=initialstate
    this.reducer=reducer
  }

  dispatch(update){
    this.state=this.reducer(this.state,update)

  }

  getState(){
    return this.state
  }
}

*/
//reducers



const merge=(state,update)=> Object.assign({},state,update)

const reduce=(state,update)=>({
	users:userReducer(state.users,update),
	contacts:contactReducer(state.contacts,update),
}
)
const contactReducer=(state,update)=>{
	if(update.type===ADD_CONTACT){
		return ([...state,update.payload])
	}
	return state
}

const userReducer=(state,update)=>{
	if(update.type===CREATE_USER){
		return merge(state,update.payload)
	}
	return state
}
 



//actions Creators

const createUser=(state={})=>({
	type:CREATE_USER,
	payload:state,
}
)

const addContact=(contact={})=>({
	type:ADD_CONTACT,
	payload:contact,

})

let DEFAULT_STATE={users:{},contacts:[],}


let store= createStore(reduce , DEFAULT_STATE)  //Store(reduce,DEFAULT_STATE)

//console.log(addContact({name:'David Malan', phone:1234567890}))


store.dispatch(createUser({foo:'foo'}))
store.dispatch(createUser ({bar:'bar'}))
store.dispatch(createUser({foo:'bar'}))

//console.log(store.getstate())

console.log("\n \n")

store.dispatch(addContact({name:'David Malan', phone:1234567890}))
store.dispatch(addContact({name:'Jordan hayashi', phone:123456789}))
store.dispatch(addContact({name:'Shintu Tiwari', phone:01}))

console.log(store.getState())


