import {fetchLogin} from '../Api.js'
//action types
export const CREATE_USER='AddUser'
export const ADD_CONTACT='AddContact'


//actions Creators

export const createUser=(state)=>({
	type:CREATE_USER,
	payload:state,
}
)

export const addContact=(contact)=>({
	type:ADD_CONTACT,
	payload:contact,

})
//Async action Creators

export const login= (username,password)=>async (dispatch)=>{
dispatch({type:'LOGIN_SENT'})
try{

const response=await fetchLogin(username,password)

if(response.ok){
dispatch({type:'LOGIN_ACCEPTED'})
return true
}
else{
let err=await response.text()
throw new Error(err)

}
}catch(err){
dispatch({type:'LOGIN_REJECTED'})
console.log(err.message)
console.log('ok..')
return err.message
}
}



