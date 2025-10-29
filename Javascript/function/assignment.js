// Q-1- write a javascript function that returns array elements larger than a number.
// let arr = [5,10,15,50,58];
// let num = 5;
// function largerNumReturn(num,arr){
//     for(let i = 0; i < arr.length; i++){
// if(arr[i] > num){
//     console.log(arr[i]);
// }
//     }

// }
// return largerNumReturn(num,arr);
// Q-2-write a javascript function to exract unique characters from a string.
// example: str = "abcdabcdefgggh"
// ans: "abcdefgh";
// let str = "abcdefgggh"; 
// function getUnique(str) {
//     let ans = "";   
//     for (let i = 0; i < str.length; i++) {
//         let currChar = str[i];
//         // If the character is not already in 'ans', add it.
//         if (ans.indexOf(currChar) === -1) {
//             ans += currChar;
//         }
//     }
//     return ans;
// }
// console.log(getUnique(str));


// Q-3- write a javascript function that accepts a list of country names as input and returns the longest country name as output
// example: ["Australia", "Germany", "United States of America"];
// let country = ["Australia", "Germany", "United States of America"];
// function longCountry(country){
//     let store = 0;
//     for(let i = 0; i < country.length; i++){
//         let ansLen = country[store] .length;
//         let currLen = country[i].length;
// if(currLen > ansLen){
//     store = i;
// }
//     }
//     return country[store]
// }
// console.log(longCountry(country));
let str = "Mithun";
function testVowels(str) {
    let count = 0; // Initialize a counter for vowels
    let vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < str.length; i++) {
        let findVowels = str[i].toLowerCase(); // Convert to lowercase to match with vowels array
        for (let j = 0; j < vowels.length; j++) {
            if (findVowels === vowels[j]) {
                count++; // Increment the counter if a vowel is found
                break; // Exit the inner loop once a match is found
            }
        }
    }
    return count; // Return the total count of vowels
}

console.log(testVowels(str)); // Output: 2
// Q-5- write a javascript function to generate random number within a range(start to end);
let start = 100;
let end = 200;
function generateRandom(start, end){
    let def = end - start +1;
    return Math.floor(Math.random() * def) + start;
}
console.log(generateRandom(start, end));