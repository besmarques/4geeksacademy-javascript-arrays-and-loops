var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

var arr = [];

for(let i = 0; i < mix.length;i++){
	//console.log(typeof mix[i]);
  arr.push(typeof mix[i]);
}
console.log(arr);