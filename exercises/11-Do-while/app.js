let i = 20;

do {
    // Magic goes here;
    var result = i;
    
    if(i%5 == 0 && i != 0){
    	result = i + "!";
    }else if (i%5 != 0){
        result = i;
    }else {
        result = "LIFTOFF";
    }
    console.log(result);
    
    i--;
    
} while (i >= 0);