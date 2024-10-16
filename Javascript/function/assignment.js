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
let str = "abcdefgggh";
function getUnique(str){
let ans = "";
for(let i = 0; i < str.length; i++){
    let currChar = str[i];
    if(ans.indexOf(currChar)== -1){
        ans += currChar;
    }
}
return ans;
}
getUnique(str);