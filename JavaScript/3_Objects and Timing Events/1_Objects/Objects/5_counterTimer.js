var count = 10;

function counterTimer(){
    console.log("Counter :",count)
    count--;
    if(count == 0){
        console.log("Times Up!")
        clearInterval(id);
    }
    
}

var id = setInterval(counterTimer,1000);