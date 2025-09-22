let arr = [1, 4, 6, 8 , 3, 9, 2];

let max = arr.reduce((a, b) => {
    return Math.max(a, b);
});

console.log("Maximum value in the array is:", max); // Output: Maximum value in the array is: 9