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

input1.addEventListener("input", function(detals){
        console.log(detals.data);     
})

// Task 02

let input2 = document.querySelector("#input2");

input2.addEventListener("focus", function(){
    alert("nothig you can write here till the time.")
})

// Task 03

let input3 = document.querySelector("#input3")

input3.addEventListener("input", function(){
    console.log(input3.value.length);      
})

// Task 03

let input4 =document.querySelector("#input4");

input4.addEventListener("input", function(){
    if(input4.value === "a"){
        console.log("you Typed A letter");
    }
})


