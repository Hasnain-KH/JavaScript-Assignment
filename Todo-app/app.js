let display = document.querySelector("#display");
let first1 = document.querySelector(".first1");
let firstbtn = document.querySelector("#firstbtn");
let inp = document.querySelector("input");

inp.addEventListener("input", function(details){
    if(details.data !== null){
         
firstbtn.addEventListener("click", function(){
    display.style.display = "block";
    first1.append(details.data); 
})
    }
})
