// Myset extend class  Set using super keyword 

class Myset extends Set {
    // with constructor 
    constructor(arr){
    
        super(arr)
        this.OriginalArray=arr
    }
    // extend add method with some print statment 
    add(val)
    {
        super.add(val)
        console.log('value is added...!')
    }
    toArray() {
        return Array.from(this)
    }
// add reset method     
    reset(){
        return new Myset(this.OriginalArray)
    }
    
}

const s= new Myset([1,2,3,4,5])
for(var i=0;i<7;i++){
    s.add(i)
}
console.log(s.toArray())

console.log(s.reset().toArray())
