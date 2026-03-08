let dice = ["⚀", "⚁","⚂","⚃","⚄","⚅"];
let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    let dicelength = Math.floor(Math.random()*dice.length);  
    console.log(dice[dicelength]);
    
})


