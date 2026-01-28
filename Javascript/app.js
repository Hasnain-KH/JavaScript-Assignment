// // Practice //

// let a = 10;
// console.log(a);
// a += 2
// console.log(a);

// let b = 10;
// console.log(b);
// b -= 2;
// console.log(b);

// let c = 10;
// console.log(c);
// c *= 2;
// console.log(c);

// let d = 10;
// console.log(d);
// d /= 2;
// console.log(d);

// let x = "hasnain";
// console.log(x);
// x += "Riaz";
// console.log(x);

// let h = null;
// h = "hasnain";

// let a1 = Symbol ("Hasnain"); // Symbol is a Unique immutable value ///
// console.log(a1);
// let a2 = Symbol("Hasnain");
// console.log(a2);

// let b1 = 13 != 13;
// console.log(b1); // false

// let b3 = 10 != 15;
// console.log(b3); // true

// let b4 = 20 != 30;
// console.log(b4); //true

function getgrade (score){
    if(score >= 90 && score <= 100){
        return "A"
    }
    else if(score >= 80 && score < 89){
        return "B"
    }
    else if(score >= 50 && score < 79){
        return "C"
    } 
    else if(score >= 33 && score <= 49){
        return "D"
    }
    else if(score >= 25 && score >= 32){
        return "F"
    }
}
console.log(getgrade(65));

let a = Symbol("Hasnain Riaz");
let b = Symbol("Hasnain Riaz")








