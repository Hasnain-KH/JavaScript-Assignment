// Task 01

// let p = document.querySelector("p");
// p.addEventListener("click", function(){
//     p.style.color = "red";
// })

// Task 02

// let para = document.querySelector("#para");
// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", function(){
//     para.style.color = "blue";
// })

// Task 03

// let toggle = document.querySelector("#toggle");
// toggle.addEventListener("click", function(){

//     if(toggle.style.color === "black"){
//         toggle.style.color = "red";
//     }
//     else
//         {
//        toggle.style.color = "black";
//     }
// })

// Task 04

// let h2 = document.querySelector("h2");
// let btn = document.querySelector("#btn");

// btn.addEventListener("click",function(){
//     if(h2.style.color === "black"){
//         h2.style.color = "red"
//     }
//     else
//     {
//         h2.style.color = "black";
//     }
// })

// Task 5

// let para3 = document.querySelector("#para3");
// let mybtn = document.querySelector("#mybtn");

// mybtn.addEventListener("click", function(){
//     if(para3.style.color === "black"){
//         para3.style.color = "red";
//         para3.style.fontSize = "30px";
//         para3.innerHTML = "Big Red!";
//     }
//     else
//     {
//         para3.style.color = "black";
//         para3.style.fontSize = "16px";
//         para3.innerHTML = "Normal text";
//     }
// })

// Task 6

let para6 = document.querySelector("#para6");
para6.classList.add("para6");

let button1 = document.querySelector("#btn1");
button1.classList.add("button");

let button2 = document.querySelector("#btn2");
button2.classList.add("button");

let button3 = document.querySelector("#btn3");
button3.classList.add("button");


button1.addEventListener("click",  function(){
    para6.style.color = "red";
    para6.innerHTML = "RedMode"

})
button2.addEventListener("click", function(){
    para6.style.color = "black";
    para6.innerHTML = "BlackMode"
    para6.style.fontWeight = "900"
})


button3.addEventListener("click", function(){
    para6.style.visibility = "hidden";
})

// Task 07

let btn9 = document.querySelector("button");
let inp = document.querySelector("#inp");
let inp2 = document.querySelector("#inp2");

btn9.addEventListener("click", function(){
    localStorage.setItem("name" , inp.value);
    localStorage.setItem("email" ,  inp2.value)
})


let inp4 = document.querySelector("#inp4")
let inp5 = document.querySelector("#inp5");
let final = document.querySelector("#final");

final.addEventListener("click" , function(){
    if(inp.value === inp4.value || inp2.value === inp5.value){
        alert("Yes Bro!");
    }else {
        alert("So sorry!");
    }
})




