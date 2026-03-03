let body = document.querySelector("#body");
let btn = document.querySelector("#btn")

btn.addEventListener("click", function(){
    if(body.style.backgroundColor === "white" || body.style.backgroundColor === "255, 255, 255"){
        body.style.backgroundColor = "black";
        body.style.color = "white"
    } else {
        body.style.backgroundColor = "white"
        body.style.color = "black"
    }

})
