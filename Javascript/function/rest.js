// Rest: Allows a function to take an indefinite number of arguments and bundle them in an array.
function sumAll(...numbers) {
    // Using the reduce method to calculate the sum of all numbers in the array.
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3)); // Output: 6

function callNum(...args) {
    // Iterating through all arguments passed to the function and logging them.
    for(let i = 0; i < args.length; i++) {
        console.log("you gave us", args[i]);
    }
}

callNum(5, 10, 15, 20);
// Output:
// you gave us 5
// you gave us 10
// you gave us 15
// you gave us 20

function argumentsSum(...args) {
    // Using the reduce method to calculate the sum of all arguments passed.
    return args.reduce((total, num) => total + num);
}

console.log(argumentsSum(1, 2, 3, 4, 5)); // Output: 15

function findMinNum(...args) {
    // Using the reduce method to find the minimum number in the arguments passed.
    return args.reduce((min, num) => {
        if(num < min) {
            return num;     
        } else {
            return min;
        }               
    });
}

console.log(findMinNum(10, -5, 3, 0, 8)); // Output: -5