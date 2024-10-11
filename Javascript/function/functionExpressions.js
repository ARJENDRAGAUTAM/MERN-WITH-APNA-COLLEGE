// const sum = function(a,b){
//     return a + b;
// }
// sum(2,4);
//  higher order function
function multiGreet(func,count){
for(let i = 1; i <= count; i++){
    func();
}
 let greet = function (){
console.log("hello");
}
}
multiGreet(greet,2);