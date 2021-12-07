let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};
var letter = "";

for(var i in par){
	letter = par[i].toLowerCase();
  if(letter == " "){continue}
    else if(counts[letter] == undefined){
    	//console.log("Undefined");
      counts[letter] = 1;
    }else{
    		//console.log("what else");
        counts[letter] = counts[letter] + 1;
    }
  
}




console.log(counts);