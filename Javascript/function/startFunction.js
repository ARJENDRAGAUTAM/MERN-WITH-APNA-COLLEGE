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
function dice(){
    let test = Math.floor(Math.random()*6)  +1 ;
    console.log(test);
}
dice()