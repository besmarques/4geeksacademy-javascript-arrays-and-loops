var people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below
let newArray = people.filter(deletePerson); 

function deletePerson(name){
  
return !name ;
  
} 

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));