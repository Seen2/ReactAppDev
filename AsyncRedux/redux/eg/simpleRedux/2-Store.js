const fetch=require('isomorphic-fetch')

const fetchLogin= async (username,password)=>{

    const response = await fetch('http://localhost:8000', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({username,password})
  })
  return response

}


//action types
const CREATE_USER='AddUser'
const ADD_CONTACT='AddContact'

class Store {

  constructor(reducer,initialstate){
    this.state=initialstate
    this.reducer=reducer
  }

  dispatch(action){
  
  if(typeof action==='function'){
  action(this.dispatch.bind(this))
  }
  else{
    console.log("type of action is:",action.type)
    this.state=this.reducer(this.state,action)


   }
   }

  getState(){
    return this.state
  }
}

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
 



//Async action Creators

login= (username,password)=>async (dispatch)=>{
dispatch({type:'LOGIN_SENT'})
try{

const response=await fetchLogin(username,password)

if(response.ok){
dispatch({type:'LOGIN_ACCEPTED'})
}
else{
let err=await response.text()
throw new Error(err)
}
}catch(err){
console.log(err)
dispatch({type:'LOGIN_REJECTED'})

}
}

let DEFAULT_STATE={users:{},contacts:[],}

let store=new  Store(reduce,DEFAULT_STATE)

//Async work
store.dispatch(login('username','password'))

console.log(store.getState())

