let inp = document.querySelector("#inp");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
    inp.click();
})

inp.addEventListener("change", function(detail){
    var file = detail.target.files[0];
    if(file){
        btn.textContent = file.name;
    }
})