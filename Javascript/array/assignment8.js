//Q-1: Square and sum the array elements using the arrow function and then find the average of the array.
const numbers = [1, 2, 3, 4, 5];
const square = numbers.map(num => num * num);
console.log("Squared Array:", square);
const sum = square.reduce((acc, curr) => acc + curr, 0);
const average = sum / square.length;
console.log("Average of Squared Array:", average);

//Q-2: Create a new array using the map function whose eachelement is equal to the original element plus 5.
let nums = [10, 20, 30, 40, 50];
console.log(nums.map(nums => nums + 5), "this is the new array");
//Q-3: Create a new array whose elements are in uppercase of words present in the original array.
let strings = ["adam", "bob", "catlyn", "donald", "eve"];
console.log(strings.map(strings => strings.toUpperCase()), "this is the uppercase array");

//Q-4: Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.The function should return a new array with the original array values and all of the additional arguments doubled
const doubleAndReturnArgs = (arr, ...args) => [
    ...arr, ...args.map((arg) => arg * 2)           
];
doubleAndReturnArgs([1, 2, 3], 4, 4); // [1,2,3,8,8]
doubleAndReturnArgs([2], 10, 4); // [2,20,8]
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));

//Q-5: Write a function called removeRandom which removes a random element from the items array and returns a new array without that item.