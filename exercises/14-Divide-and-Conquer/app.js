let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList(list_of_numbers){
var even = [];
var odd = [];

for(var i = 0; i < list_of_numbers.length; i++){
	//console.log(i);
  if(list_of_numbers[i]%2 == 0 ){
  	even.push(list_of_numbers[i]);
  }else {
  	odd.push(list_of_numbers[i]);
  }
}
//console.log("even " + even);
//console.log("odd " + odd);
return odd.concat(even);
}
console.log(mergeTwoList(list_of_numbers))
