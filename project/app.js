let dice = ["⚀", "⚁","⚂","⚃","⚄","⚅"];
let btn = document.querySelector("#btn");
let display = document.querySelector("#display");

btn.addEventListener("click", function(){
    display.innerHTML = "";
    let dicelength = Math.floor(Math.random()*dice.length);  
    display.append(dice[dicelength]);
})

let span = document.querySelector("#span");
let forspan = document.querySelector(".forspan");

btn.addEventListener("click", function(){
   forspan.style.display = 'block';
})



