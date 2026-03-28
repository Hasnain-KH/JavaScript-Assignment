// Loop pratice Task 01:

// for(var i = 0; i <= 10; i++){
//     console.log(i);
// }

// Task 02: 

// for(var i = 10; i > 0; i--){
//     console.log(i);
// }

// Task 03:
// first way to print even numbers 1 to 20. 

// for(var i = 1; i <= 21; i++){
// if(i % 2 === 0){
//     console.log(`even number ${i}`);
// }
// }

// Second way to print even numbers 1 to 20. 

// for(var i = 2; i <= 20; i += 2){
//     console.log(i); 
// }

// Task 04:
// first way to print odd numbers 1 to 20. 

// for(var i = 0; i <= 20; i++){
//     if(i % 3 === 0){
//         console.log(i);    
//     }
// }

// Second way to print odd numbers 1 to 20. 

// for(var i = 0; i <= 20; i += 3){
//     console.log(i);
// }

// Task 05:

// var sum = 0;
// for(var i = 0; i <= 10; i++){
//     sum += i;
// }
// console.log(sum);

// let addval = 0;
// for(var i = 0; i <= 10; i++){
//     addval = addval + i;
// }
// console.log(addval);

// let val = 0;
// for(var i = 0; i <= 12; i++){
//     val = val + i;
// }
// console.log(val);

// let val2 = 0;
// for(var i = 0; i <= 14; i++){
//     val2 = val2 + i;
// }
// console.log(val2);

// Task 06:
// for(var i = 5; i <= 10; i++){
//     console.log(`5*${i} = ${5*i}`);  
// }

// Task 07;

// var prices = [100, 200, 50, 10, 7000];
// let total = 0;

// for(var i = 0; i < prices.length; i++){
//     total += prices[i];
// }
// if(total > 5000){
//    let discount = total * 10 / 100;
//    let finalprice = total - discount;
//    console.log(`It is a initial amount which you had to pay ${total} rupees but listen.`);
//    console.log(`It's a discount for you ${discount} rupees which is 10%.`);
//    console.log(`with 10% discount Now you have to pay ${finalprice} rupees amount.`);
// }
// else{
//     console.log(`It is your total amount which you have to pay ${total}`); 
// }

// Task 08;

// let prices = [200, 400, 20, 220, 600, 700];

// let max = [0];

// for(var i = 0;  i < prices.length; i++){
//     if(prices[i] > max ){
//         max = prices[i]
//     }
// }
// console.log(`Highest Price which is ${max}`);

// let arr = [200, 400, 460, 700, 600, 900, 78];

// let maxnum = [0];

// for(var i = 0; i < arr.length; i++){
//     if(arr[i] > maxnum){
//         maxnum = arr[i];
//     }
// }

// console.log(maxnum);

// let rates = [498, 29, 768, 9850, 467, 983];

// let maxrates = [0];

// for(var i = 0; i < rates.length; i++){
//     if(rates[i] > maxrates){
//         maxrates = rates[i];
//     }
// }
// console.log(maxrates);

// Task 09;

// let price = [45, 67, 89, 50 ,65];

// let min = price[0];

// for(var i = 0; i < price.length; i++){
//     if(price[i] < min){
//         min = price[i]
//     }
// }
// console.log(min);

// Task 10;

// let arr2 = [19,3,5,6,87,4];

// let mini = arr2[0]

// for(var i = 1; i < arr2.length; i++){
//     if(arr2[i] < mini){
//         mini = arr2[i]
        
//     }
// }

// console.log(mini);

// Task 10;
let  arr3 = [29, 49, 33, 32, ,48];
let minimum = arr3[0];

for(var i = 0; i < arr3.length; i++){
    if(arr3[i] < minimum){
        minimum = arr3[i]
    }
}
console.log(minimum);

