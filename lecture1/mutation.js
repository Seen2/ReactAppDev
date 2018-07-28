// here mutation of the object comes
const o={
    
    name:'first object',
    id:9,
    address:{
        location:'on the top..'
        
    }
    
}
console.log("here is name before object mutation for "+o.name)

//here mutation occurs
const o1 = o
o1.name='Lokpati'
console.log('here the name of first object after the mutation '+o.name)

// now we copy object without mutaing
const o2=Object.assign(o,{})

console.log('first object below :')
console.log(o)

// but if we still change 
o2.address={
    location:'in the middle'
}
console.log('first object below :')
console.log(o)

// will mutate the object. now we need to make deepcopy 
//here we make deepcopy
const o3=deepCopy(o2)

console.log('deepCopying...\n done..!')

console.log(o3)

console.log('over...!! good...!')



function deepCopy(o)
{
    const keys = Object.keys(o)
    const newobj={}                              //Object.assign({},o)
    for (var i = 0; i < keys.length; i++) 
    {
        var key=keys[i]
        //console.log(' good...! type of key is '+typeof(o[key]))

        if (typeof(o[key]) === 'object') 
        {
            //console.log(' good...!')
            
            newobj[key]=deepCopy(o[key])
            
        } 
        else 
        {
            newobj[key] = o[key]
            
        }
        
        
    }
    
    return newobj
}
// string is not as variables thats why   . and [] matters
