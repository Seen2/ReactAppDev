const str='i am string'
const num = 23
const num1= '42'
const ar={}
const arr = ['42',42,'fourty two', function beyalish(){
    console.log(' i am the function beyalish ')
},arr=Object.assign({},ar)]

console.log(' i am the str='+str +" i am the type of "+typeof(str))
console.log(' i am the num='+num +" i am the type of "+typeof(num))
console.log(' i am the num1='+num1 +" i am the type of "+typeof(num1))
console.log(' i am the ar='+ar +" i am the type of "+typeof(ar))
console.log(' i am the arr='+arr +" i am the type of "+typeof(arr))


for (var i = 0; i < arr.length; i++) {
    
    console.log(arr[i] +"of the type "+typeof(arr[i]))
    
}