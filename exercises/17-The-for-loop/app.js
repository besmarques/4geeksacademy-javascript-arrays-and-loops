var myArray = [2323,4344,2325,324413,21234,24531,2123,42234,544,456,345,42,5445,23,5656,423];
var average = 0;
for (var index in myArray){

	//console.log(myArray[index]);
  
  
  
  average = average + myArray[index];
  
  
	
}
console.log(average / myArray.length);