//-------Array Methods
//1-forEach
//2-map
//3-filter
//4-some
//5-every
//6-reduce
//*********forEach() method************
// The forEach() method executes a provided function once for each array element.
// It is not a pure function, it does not return a new array.
// It is used to iterate over the elements of an array.
// It is not chainable.
// It does not mutate the array on which it is called.
// It is not a pure function, it does not return a new array.
// It is used to iterate over the elements of an array.
let arr = [1,2,3,4,5]
 let print = function(el){
    console.log(el);
 };
 arr.forEach(print);
 //OR

 // Using forEach to iterate over each element in the array and log it
 arr.forEach(function(el){
    console.log(el);
 });
    //OR
    arr.forEach((el) => {
        console.log(el);
    } );
 let arr2 =[
    {name:"sachin",age:23},
    {name:"saurabh",age:24},
    {name:"sachin",age:25},
 ];
 arr2.forEach(( student) => {
    console.log(student.age);
    
 });
 //*************map() method************
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// It is a pure function, it returns a new array.
// It is chainable.
// It does not mutate the array on which it is called.
let numbers = [1, 2, 3, 4, 5];
let double = numbers.map((el) => {
    return el * el
}
);
console.log(double);
//***************filter() method************
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// It is a pure function, it returns a new array.
// It is chainable.
// It does not mutate the array on which it is called.
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = numbers2.filter((el) => {
    return el % 2 === 0
}
);
console.log(even);   