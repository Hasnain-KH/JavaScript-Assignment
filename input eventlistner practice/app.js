// addEventListener Click
let p = document.querySelectorAll("p");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    p.forEach(function(haha){
        haha.style.color = "red";
    })
})

// addEventListener Input


let input = document.querySelector("input");
input.addEventListener("input", function(){
    console.log("yesdone");
    
})

// Task 01




let input1 = document.querySelector("#input1");

input1.addEventListener("input", function(data){
    console.log(data);
    
})
