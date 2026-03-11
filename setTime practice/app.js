function greet(){
    console.log("How are you");
}
setTimeout(greet, 8000)

setTimeout(()=>{
    console.log("hi");
},  4000)

setTimeout(() =>{
    console.log("My name is hasnain");
},  8000);

setTimeout(()=>{
    alert("it will show");
    console.log("the alert have been show on screen");
}, 2000);
