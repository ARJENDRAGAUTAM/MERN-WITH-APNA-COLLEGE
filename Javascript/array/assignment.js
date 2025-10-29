//  Q1- write a javascript program to get the first n elements of an array. [n can be any positive number].
// for example: [7,9,0,-2];
// print, [9,0,-2];
let arr = [ 7, 9, 0, -2];
let n = 3;
let ans = arr.slice(0,3);
console.log(ans);
// expected output : [7, 9,0]
// Q2- Write a JavaScript program to get the last n elements of an array.[n can be any positive number]
// for example : [7, 9, 0, -2]
// [9, 0, -2]
let arr2 = [7, 9, 0, -2];
let n2= 3;
let ans2 = arr2.slice(arr2.length-n);
console.log(ans2);
// expected output:[9, 0, -2];
// Qs3.Write a JavaScript program to check whether a string is blank or not.
// // let str = prompt("please enter a string:")
// // if(str ==  0){
// //     console.log("string is empty")
// // }else {
// // let ans3 = str;
// // console.log("string is not");
// }
//Q-4 write a javascript program to test whether the character at the given(character) in lower case.
let str2 = "ApNaCoLLeGe";
let idx = 3;
if(str2[idx] == str2[idx].toLowerCase()){
    console.log("character is lower case!")
}else{
    console.log("character is not lowercase!!")
}
console.log(str2);
//Q-5 Write a JavaScript program to strip leading and trailing spaces from a string
let str3 = "hello      world  hello universe hello nothing"; 
console.log(`this is the original string = "${str3}"`);

let trimmedStr = str3.replace(/\s+/g, ' ').trim();
console.log(`this is the trimmed string = "${trimmedStr}"`);
// Q6-Write a JavaScript program to  check if an element exists in an array or not.
let arr3 = ["hello", 'a', 23, 45, 65, 85];
let item = 23;
if(arr3.indexOf(item) != -1){
    console.log("element exist in array!")
}else{
    console.log("element doesn't exist in array!")
}

