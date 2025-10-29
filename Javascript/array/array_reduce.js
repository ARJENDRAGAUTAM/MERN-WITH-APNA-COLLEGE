let nums = [1, 2, 3, 4, 5];

// Using reduce to sum all numbers in the array
let sum = nums.reduce((accumulator, currentValue) => {
    console.log(accumulator);
    return accumulator + currentValue;
});

console.log("Sum of array elements:", sum); // Output: Sum of array elements: 15