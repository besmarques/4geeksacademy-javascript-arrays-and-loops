var people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below
var newArray = people.filter(deletePerson);

function deletePerson(el){
	return people != el;
}

people = newArray;


console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));