// function greet(){
//     console.log("How are you");
// }
// setTimeout(greet, 8000)

// setTimeout(()=>{
//     console.log("hi");
// },  4000)

// setTimeout(() =>{
//     console.log("My name is hasnain");
// },  8000);

// setTimeout(()=>{
//     alert("it will show");
//     console.log("the alert have been show on screen");
// }, 2000);

// setTimeout(()=>{
//     let pro = prompt("write valid password");
//     if(pro === 12345){
//         alert("Valid Password");    
//     }
//     else{
//         alert("Invalid Password");
//     }
// }, 2000);

// Task 1

// let user = (name, age) =>{
//     console.log(`${name} is ${age} years Old`);   
// }

// setTimeout(() => {
//     user("Ayan", 20);
// }, 7000)


let user = (name, age) => {
    alert(`${name} is ${age} years old`)
}
setTimeout(() => {
    user("Sufyan", 10);
    user("Ayan", 20)
}, 4000)