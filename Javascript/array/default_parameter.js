//given a default value to the argument
function sum(a, b = 5) {
    return a + b;
}

console.log(sum(3)); // Output: 8
console.log(sum(3, 7)); // Output: 10