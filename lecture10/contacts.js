const noContacts=3
const firstNames = ['Emma','Noah','Olivia','Liam','Ava','William','Sophia',
'Mason','Isabella','James','Mia','Benjamin','Charlotte','Jacob','Abigail',
'Michael','Emily','Elijah','Harper','Ethan','Amelia','Alexander','Evelyn',
'Oliver','Elizabeth','Daniel','Sofia','Lucas','Madison','Matthew','Avery',
'Aiden','Ella','Jackson','Scarlett','Logan','Grace','David','Chloe','Joseph',
'Victoria','Samuel','Riley','Henry','Aria','Owen','Lily','Sebastian','Aubrey',
'Gabriel','Zoey','Carter','Penelope','Jayden','Lillian','John','Addison','Luke',
'Layla','Anthony','Natalie','Isaac','Camila','Dylan','Hannah','Wyatt','Brooklyn',
'Andrew','Zoe','Joshua','Nora','Christopher','Leah','Grayson','Savannah','Jack',
'Audrey','Julian','Claire','Ryan','Eleanor','Jaxon','Skylar','Levi','Ellie','Nathan',
'Samantha','Caleb','Stella','Hunter','Paisley','Christian','Violet','Isaiah','Mila',
'Thomas','Allison','Aaron','Alexa','Lincoln']

const lastNames = ['Smith','Jones','Brown','Johnson','Williams','Miller','Taylor',
'Wilson','Davis','White','Clark','Hall','Thomas','Thompson','Moore','Hill','Walker',
'Anderson','Wright','Martin','Wood','Allen','Robinson','Lewis','Scott','Young',
'Jackson','Adams','Tryniski','Green','Evans','King','Baker','John','Harris','Roberts',
'Campbell','James','Stewart','Lee','County','Turner','Parker','Cook','Mc','Edwards',
'Morris','Mitchell','Bell','Ward','Watson','Morgan','Davies','Cooper','Phillips',
'Rogers','Gray','Hughes','Harrison','Carter','Murphy']


const rand=(max,min=0) => Math.floor(Math.random()*(max+min+1)) +min

const name =() => `${firstNames[rand(firstNames.length-1)]} ${firstNames[rand(firstNames.length-1)]}`

const phone= () => `${rand(9999,1000)} ${rand(999999,100000)}`

const createcontacts =() => ({name:name(),phone:phone(),})


const addkeys = (val,key) => ({key,...val})

export default Array.from({length:noContacts},createcontacts).map(addkeys).sort(function(a, b) {
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

/*
.sort((a,b)=> (a.name>b.name?true:(a.name<b.name)?true:null)
*/
