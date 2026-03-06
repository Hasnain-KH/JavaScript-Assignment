let input = document.querySelector("#input");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");

let btn1 = document.querySelector("#btn1");


btn1.addEventListener("click" , function(){
    localStorage.setItem("name", input.value);
    localStorage.setItem("email", input2.value);
    localStorage.setItem("password", input3.value);
})

btn1.addEventListener("click", function(){
    location.href = "indexsecond.html"
})

// for second

let next1 = document.querySelector("#nex1");
let nextsecond = document.querySelector("#nextsecond");
let nextthird= document.querySelector("#nextthird");

let btn02 = document.querySelector("#btn02");


console.log(next1);






