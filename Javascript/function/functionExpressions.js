// // const sum = function(a,b){
// //     return a + b;
// // }
// // sum(2,4);
// //  higher order function
// // function multiGreet(func, count) {
// //     for (let i = 1; i <= count; i++) {
// //         func();
// //     }
// // }

// // let greet = function () {
// //     console.log("hello");
// // }

// // multiGreet(greet, 2);

// // higher order function return
// function oddOrEvenFactor(request){
// if(request == "odd"){
//     return function(n){
//         console.log(!(n%2 == 0));
//     }
// }
// else if(request == "even"){
//     return function(n){
//         console.log(n%2 == 0);
//     }
// }
// else{
//     console.log("wrong request!")
// }
// }
// methods
const calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    multi: function(a,b){
        return a*b;
    },
    div: function(a,b){
        return a/b;
    }
}
let test = calculator.add(5,5);
console.log(test)