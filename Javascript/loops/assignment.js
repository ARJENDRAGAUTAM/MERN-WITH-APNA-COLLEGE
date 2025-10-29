// Q-1- write a js program to delete all occurrences of element 'num' in a given.
//example: if arr = [1,2,3,4,5,6,7] & num =2;
// let arr = [1,2,3,4,5,6,7];
// let num = 3;
// for(let i = 0; i < arr.length; i++){
//     if( arr[i] == num){
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);
// Q-2- Write a js program to find no of digits in a number.
// example: if number = 287152, count = 6;
// let number = 287152;
// let count = 0;
// let copy = number;
// while(copy > 0){
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count)
// Q-3-Write a js program to find sum of digits in a number.
// example: if number = 287152, sum = 25;
// let number = 287152;
// let sum = 0;
// let copy = number;
// while( copy > 0){
//     digit = copy % 10;
//     sum += digit;
//     copy = Math.floor(copy/10);
// }
// console.log(sum);

// Qs4.Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer.]
// let n = 5;
// let factorial = 1;
// for( let i = 1; i < n; i++){
//     factorial *= i;
// }
// console.log(`factorial of ${n} is ${factorial}`);
//Qs5.Find the largest number in an array with only positive numbers.
let arr = [55,54,66,47,56,1,24,55,66];
let largest = 0;
for(let i = 0; i < arr.length; i++){
    if(largest < arr[i]){
        largest = arr[i];
    }
}
console.log(largest);