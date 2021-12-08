var myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

var comp = 0 ;

function findMax(myArray){
	for(var i = 0; i < myArray.length; i++){
  	if(myArray[i] > comp){
    	comp = myArray[i];
    }
  }
  myArray = comp;
  return myArray;
}

console.log(findMax(myArray));