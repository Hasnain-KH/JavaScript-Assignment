// addEventListener Click Pracive

let p = document.querySelector("#parafirst");
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

// Task 04

let input4 =document.querySelector("#input4");
let p = document.querySelector("#para4");

input4.addEventListener("input", function(event){
    if(event.data === "a" || event.data === "A"){
        console.log(event.data);   
    }
})

// Task 5

let input5 = document.querySelector("#input5");

input5.addEventListener("input", function(){
   if(input5.value.length > 10){
    console.log("enough");
    
   }
    }
)

// Task 6

let input6 = document.querySelector("#input6");
input6.addEventListener("input", function(details){
    if(input6.value.length > 15){
        console.log("That's was enough");  
    }
    if(details.data === "z" || details.data === "Z"){
        console.log("OH");   
    }   
})










