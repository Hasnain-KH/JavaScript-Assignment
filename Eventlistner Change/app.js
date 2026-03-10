let h1 = document.querySelector("h1");

window.addEventListener("keydown", function(details){
    if(details.key === " "){
        h1.textContent = "YOU CLICK THE SPACE";
    }
    else{
        h1.textContent = details.key
        h1.style.letterSpacing = "-2px";
        h1.style.fontSize = "130px";
    }
})