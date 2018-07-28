const n='hello';
const cap=(str)=> {

  for(let i=0;i<str.length;i++){
  //  console.log(str[0])
    if(i===0){
      s=str[i].toUpperCase()+""
    }
    else{
      s=s+str[i]
    }
  }


  return s
}

console.log(cap(n))
