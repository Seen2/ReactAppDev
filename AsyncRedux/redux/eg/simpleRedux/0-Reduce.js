const reduce=(state,update)=> Object.assign({},state,update)

let state={}

state=reduce(state,{foo:'foo'})
state=reduce(state,{bar:'bar'})
state=reduce(state,{foo:'bar'})
console.log(state)
