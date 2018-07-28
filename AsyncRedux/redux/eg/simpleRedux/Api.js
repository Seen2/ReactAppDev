const fetch=require('isomorphic-fetch')



const fetchLogin= async (username,password)=>{

    const response = await fetch('http://localhost:8000', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({username,password})
  })
  return response

}
/*
response= fetchLogin('username','password')
console.log(response.ok)
//export default fetchLogin
*/
