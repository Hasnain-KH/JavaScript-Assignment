// Task 01

let p = document.querySelector("p");
p.addEventListener("click", function(){
    p.style.color = "red";
})

// Task 02

let para = document.querySelector("#para");
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", function(){
    para.style.color = "blue";
})

// Task 03

let toggle = document.querySelector("#toggle");
toggle.addEventListener("click", function(){

    if(toggle.style.color === "black"){
        toggle.style.color = "red";
    }
    else
        {
       toggle.style.color = "black";
    }
})

// Task 04

let h2 = document.querySelector("h2");
let btn = document.querySelector("#btn");

btn.addEventListener("click",function(){
    if(h2.style.color === "black"){
        h2.style.color = "red"
    }
    else
    {
        h2.style.color = "black";
    }
})

// Task 5

let para3 = document.querySelector("#para3");
let mybtn = document.querySelector("#mybtn");

mybtn.addEventListener("click", function(){
    if(para3.style.color === "black"){
        para3.style.color = "red";
        para3.style.fontSize = "30px";
        para3.innerHTML = "Big Red!";
    }
    else
    {
        para3.style.color = "black";
        para3.style.fontSize = "16px";
        para3.innerHTML = "Normal text";
    }
})



