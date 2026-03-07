let h2 = document.querySelector("#h2");

let sel = document.querySelector("select");

sel.addEventListener("change", function(details){
    h2.textContent = `Congrajulations Your ${details.target.value} is seleted!`;
    
})