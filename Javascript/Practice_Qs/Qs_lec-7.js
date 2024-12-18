// Question-1: write an arrow function that returns the square of a number 'n'.
const square = (n) => {
    return n*n;
}
console.log(square(5)); //Output: 25
// Question-2: write a function that prints "Hello World" 5 time at interval of 2s each.
const test = setInterval(() => {
    console.log("Hello World")
},2000)
setTimeout(() => {
    clearInterval(test);
}, 10000);
