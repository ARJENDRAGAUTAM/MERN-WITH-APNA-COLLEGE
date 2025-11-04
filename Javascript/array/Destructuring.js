//Destructuring: Storing values of an array into multiple variables.
let names = ["Alice", "Bob", "Charlie"];
// let winner = names[0];
// let runnerUp = names[1];
// let participant = names[2];

// console.log(winner);
let [winner, runnerUp, participant, ...others] = names;
console.log(winner);      // Output: Alice
console.log(others);       // Output: [ 'Alice', 'Bob', 'Charlie' ]