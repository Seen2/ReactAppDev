const processContact = contact => ({
  name: `${cap(contact.name.first)} ${cap(contact.name.last)}`,
  phone: contact.phone,

})
//capitalize the string
const cap=(str)=> {
  for(let i=0;i<str.length;i++){
    if(i===0){
      s=str[i].toUpperCase()+""
    }
    else{
      s+=str[i]
    }
  }
  return s
}
export const fetchUsers = async () => {
  const response = await fetch('https://randomuser.me/api/?results=9&nat=us')
  const {results} = await response.json()

  return results.map(processContact).sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
}
export default fetchUsers
