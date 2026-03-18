let timeout = setTimeout(function(){
    console.log("Hi hasnain"); 
}, 4000)

clearTimeout(timeout);

let tm = setTimeout(function(){
    alert("Hi My name is hasnain");
}, 2000)

clearTimeout(tm);

let tmdel = setTimeout(function(){
    console.log("Hi");  
}, 1000)

clearTimeout(tmdel);

let int = setInterval(function(){
    console.log("HI");
}, 2000)

clearInterval(int);

let timeint = setInterval(function(){
    console.log("Oh");
}, 3000)

clearInterval(timeint);


