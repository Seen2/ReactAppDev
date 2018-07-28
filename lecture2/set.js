// create a set class

class Set{
//with constructor 
    constructor(arr)
    {
        this.arr=arr
    }
// create add methode to add element to set    

    add(val)
    {
// element should not be repeated        
        if(!this.has(val))
        {
            this.arr.push(val)
        }
        
    }



// create delete methode 


del(val)
{
    this.arr = this.arr.filter(x => x!== val)    
}


//create a method to check a value is in the list 
   has(val)
   {
   
        return this.arr.includes(val)
    
   }

// create a size fuction
 size()
 {
     return this.arr.length
 }
 
 }


const s= new Set([1,2,3,4,5])

s.add(5)

console.log(s)

s.del(1)

console.log(s)

console.log("size ="+ String(s.size()))

s.add(9)
console.log(s)