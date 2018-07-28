
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




