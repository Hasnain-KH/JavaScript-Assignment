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


