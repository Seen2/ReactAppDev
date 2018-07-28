const o={}
o.name= 'first object'
o.level='top'
o.speak= function(){
    console.log("i am "+o.name)
    console.log(' my level is '+o.level)

    
}

// second declearation of the object

const  o1={
    name : 'second object',
    level : 'middle of the page ' ,
    speak : function(){
        console.log(' my level is '+o1.level)

        console.log("i am the "+o1.name)
    }
}

// third kind of the decalaration

const o2 = new Object()
o2.name='third kind of the object'
o2.level= 'botttom'

o2.speak= function(){
    
    console.log("i am the "+o2.name)
    console.log(' my level is '+o2.level)
}

o1.speak()
o.speak()
o2.speak()

console.log(' i am the out and the end of the function')