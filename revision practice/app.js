var cars = {
    name: "mehran",
    price: "100_00_0",
    color: ["grey, white"],
    model: "2024"
}
cars.isavailible = "yes";

console.log(cars);
console.log(cars.price);
console.log(cars["model"]);

var Student = function car(name){
    this.name = name;
    this.naem = name;
    this.name = name;
    this.greet = function(){
        console.log(`Hello My name is ${name}`);
        
    }
}
var student1 = new Student('hasnain');
var student2 = new Student('Ayan');
var student3 = new Student('sufyan')
student1.greet();
student2.greet();
student3.greet();


var Names = function(name){
    this.name = name;
}

var numm = new Names("riaz khan");
console.log(numm);

function gotopage(){
    location.href = "https://www.google.com";
}

function gotoanother(){
    location.href = "https://www.facebook.com";
}

function gotowiki(){
    location.href = "https://www.wikipedia.com";
}

function gotowhatsapp(){
    location.href = "https://www.whatsapp.com";
}
function gotodaraz(){
    location.href = "https://www.daraz.com";
}
function gotojunaidjamshed(){
    location.href = "https://www.junaidjamshed.com";
}

function logout(){
    location.replace("https://www.amazon.com")
}

function finish(){
    location.replace("https://www.Netflix.com");
}

function logout2(){
    location.replace("https://www.wikipedia.come")
}

var h1 = document.querySelector("#name");
h1.classList.add("h1");

// var a = document.querySelector("a");
a.classList.add("ancer");


let img = document.createElement("img");
document.body.appendChild(img);
img.setAttribute("src", "assets/google.jpg");
img.classList.add("googleimg");

let img2 = document.createElement("img");
document.body.appendChild(img2);
img2.setAttribute("src", "assets/linkedin.png");
img2.classList.add("linkedin");


let a = document.createElement("a");
let img3 = document.createElement("img");

document.body.append(a);
document.body.append(img3);

a.append(img3);

img3.setAttribute("src","assets/linkedin.png");

a.setAttribute("href", "https://www.linkedin.com");

img3.classList.add("img3");

let ancer = document.createElement("a");
let img4 = document.createElement("img");

document.body.append(ancer);
document.body.append(img4);

ancer.append(img4);

ancer.setAttribute("href", "https://www.github.com");


img4.setAttribute("src", "assets/github icon.png");

img4.classList.add("forimg4");


let a5 = document.createElement("a");
let img5 = document.createElement("img");

document.body.append(a5);
document.body.append(img5);

a5.append(img5);

img5.setAttribute("src", "assets/google.jpg");

a5.setAttribute("href", "https://www.google.com");

img5.classList.add("lastimg")













