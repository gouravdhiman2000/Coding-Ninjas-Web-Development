
var sec = 1;

function sayHello(){
    //console.log("Say Hello");
    console.log("after", sec);
    sec++;
    // after 5 sec we need to stop the counter
    if(sec == 6){
        //stop
        clearInterval(id);
        // clearInterval stops the setInterval and it needs the instance id of the setInterval to stop it
    }
}

// setTimeout execcute the function after the given time
//setTimeout(sayHello,3000);

// setInterval execute the function repeatlly after the given time
var id = setInterval(sayHello,1000);