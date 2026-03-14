let h1 = document.querySelector("h1");

window.addEventListener("keydown", function(details){
    details.preventDefault();
        if(details.key === " "){
        h1.textContent = "I CLICK THE SPACE";
        h1.style.letterSpacing = "-3px"
    }
    else{
        h1.textContent = details.key
        h1.style.letterSpacing = "-3px";
        h1.style.fontSize = "130px";
        h1.style.userSelect = "none"
        h1.style.touppercase()
    }
})