// let myimage = document.createElement("img");
// myimage.src = "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D"
// document.body.appendChild(myimage);

// myimage.width = 200;
// myimage.height = 200;

let div = document.createElement("div");

let para1 = document.createElement("p");

let para2 = document.createElement("p");

let para3 = document.createElement("p");

let pata4 = document.createElement("p")

let text1 = document.createTextNode("Hello my Name is Hasnain Riaz");

let text2 = document.createTextNode("Hello My name is Muhammad Sufyan");


para1.appendChild(text1);

para2.appendChild(text2);

div.appendChild(para1);

div.appendChild(para2);

document.body.appendChild(div);