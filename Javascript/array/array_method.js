//Methods of array@@@@@@@@@@@@@@@@@@@@@@@@@
//1-push=add to end
// 2-pop=delete from end & returns it,
// 3-shift=delete from start & return it and 
// 4-unshift=add to start
//5-indexOf= find index of arrays
//6- includes= return boolen value(true or false)
//7-concat = add new elements or new array
//8- reverse = reverse array to our original form
//9-slice =
//10-splice =
//11-sort =
//1-push#########################
let cars = ["audi", "BMW","xuv","maruti"];
// console.log(cars,cars.length);
//expected output:["audi", "BMW","xuv","maruti"]4
cars.push("ferrari");
// console.log(cars,cars.length);
//expected output:["audi", "BMW","xuv","maruti","ferrari"]5

//2-pop##########################
cars.pop();
// console.log(cars);
//expected output:[ 'audi', 'BMW', 'xuv', 'maruti' ]
cars.pop();
// console.log(cars);
//expected output:[ 'audi', 'BMW', 'xuv' ]

//3-unshift#######################
cars.unshift("rang rover");
// console.log(cars);
//expected output:[ 'rang rover', 'audi', 'BMW', 'xuv' ]
//4-shift##########################
let useShift = cars.shift();
// console.log(useShift);
// console.log(cars);
//expected output:rang rover
// [ 'audi', 'BMW', 'xuv' ]


//Practice*********************
let months = ["january","july","march","august"];
// need of output:["july","june","march","august"];
months.shift();
months.shift();
months.unshift("june");
months.unshift("july");
// console.log(months);
//expected output:["july","june","march","august"]

//5,6-indexOf() & include()methods#################
let check = cars.indexOf("xuv"); // 2
 check = cars.indexOf("honda");//-1
// console.log(check);
let check2 = cars.includes("BMW")// true
let check3 = cars.includes("honda");//false
// console.log(check2);
// console.log(check3);
//7- use of concat method##################
let primary = ["red","yellow","blue"];
let secondary = ["green","orange","violet"];
// let AllColors = primary.concat(secondary);
let AllColors = [ "violet", "orange", "green", "blue", "yellow", "red" ]
// console.log(AllColors);
//expected output:[ 'red', 'yellow', 'blue', 'green', 'orange', 'violet' ]
//8- use of reverse method#####################
// AllColors.reverse();
// console.log(AllColors)
//expected output:[ 'violet', 'orange', 'green', 'blue', 'yellow', 'red' ]

//9-use of slice method########################
//[ 'violet', 'orange', 'green', 'blue', 'yellow', 'red' ]
let Slice1 = AllColors.slice();
// console.log(Slice1);
//expected output:[ 'violet', 'orange', 'green', 'blue', 'yellow', 'red' ]
let Slice2 = AllColors.slice(1,3);
// console.log(Slice2);
//expected output:["orange","green"]
let Slice3 = AllColors.slice(-1);
// console.log(Slice3);
//expected output:["red"]
let Slice4 = AllColors.slice(-1,-4);
// console.log(Slice4);
//expected output:[]
//use of splice###################
//arr.splice(start,deleteElement,addElement("a","b","c"))
let fruits = ["apple","banana","grapes","melon","litchi"];
let useSplice = fruits.splice();
// console.log(useSplice);
//expected output:[]
// console.log(fruits);
//expected output:[ 'apple', 'banana', 'grapes', 'melon', 'litchi' ]
let useSplice2 = fruits.splice(0,1);
// console.log(useSplice2);
//expected output:['apple']
// console.log(fruits);
//expected output:['banana','grapes','melon','litchi'];
let useSplice3 = fruits.splice(0,1,"pineapple","straberry");
// console.log(useSplice3);
//expected output:['banana']
// console.log(fruits)
//expected output:['pineapple','straberry','grapes','melon','litchi'];
// Practice Q-1-- for given start state of an array, change it to final from using splice
// start-['jan','july','march','aug']
// final-['july','june','march','aug']
let months2 = ['jan','july','march','aug'];
let CheckSplice = months2.splice(0,2,"july","june")
// console.log(CheckSplice);
// Q-2--Return the index of the "javascript" from the given array, if it was reversed.
let lang = ['c','c++','html','javascript','python','java','c#']
lang.push("sql");
// console.log(lang)
let ReverseCheck = lang.reverse().indexOf("javascript");
// console.log(ReverseCheck)
// Practice Q1- tic tac toe game
let game = [['X','null','O'],['null','X','null'],['O','null','X']];
game[0][1] = "O";
console.log(game);









