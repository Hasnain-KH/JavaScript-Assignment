// let inp = document.querySelector("input");
// let arr = ["ayan", "ali", "sufyan", "hasnian"];

// inp.addEventListener("keyup", function(){
//     let val = inp.value.toLocaleLowerCase().trim();
//     if(arr.some(me => me.toLocaleLowerCase().startsWith(val))){
//         console.log("yes found");
//     }
//     else{
//         console.log("Not Found");
//     }   
//     }
// )

// Task 2:

let inp2 = document.querySelector("#inp2");
let user = [
    {name: "ayan", age: 10},
    {name: "sufyan", age: 11},
    {name: "farhan", age: 12},
    {name: "hasnain", age: 13},
    {name: "kashif", age: 14},
]
    
inp2.addEventListener("keyup",function(){
    let val = inp2.value.toLocaleLowerCase().trim();
    
    if(user.some(me => me.name === val)){
        console.log("Yes found"); 
    }
    else{
        console.log("No found");
        
    }
})