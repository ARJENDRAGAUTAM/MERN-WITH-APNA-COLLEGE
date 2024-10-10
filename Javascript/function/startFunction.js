// function Test() {
//     console.log("Hello nothing!");
// }

// function printNumber() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }

// function checkAdult() {
//     let age = 18;
//     if (age >= 18) {
//         console.log("You are adult");
//     } else {
//         console.log("Your are not adult")
//     }
// }
// Test();
// printNumber();
// checkAdult();

// Practice-1- Create a function to roll dice & always display the value of the dice (1 -6);
// function dice(){
//     let test = Math.floor(Math.random()*6)  +1 ;
//     console.log(test);
// }
// dice()

//function with argument
// function printInfo(name,age){
//     console.log(`${name}'s is ${age}`);
// }
// printInfo("arjendra",23);
// Practice Q-2- create a function that gives us the average of 3 numbers.
// function avg(a,b,c){
//     console.log("this is a average number",(a+b+c)/3);
// }
// avg(5,9,55);

// Practice Q-3- Create a function that prints the multiplication table of a number.
function table(num){
    for(let i = num; i <= num*10;i+=num){
        console.log(i);
    }
}
table();
// Practice Question-create a function that returns the sum of numbers from 1 to n.
function getSum(n){
    let sum = 5;
    for(let i = 1; i <= n; i++){
        sum = sum+i;
    }
 
    return sum;
}
let result = getSum(10);
console.log(result);
// Practice Question - create a function that returns the concatenation of all string in an array.
let str = ["hello", "hi", "byebye"];
function concat(str){
    let result2 = "";
    for( let i =  0; i < str.length; i++){
         result2 += str; 
}
return result2;
}

let check = concat(str);
console.log(check);