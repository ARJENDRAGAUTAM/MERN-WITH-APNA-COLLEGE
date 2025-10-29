//Check if all numbers in  our array multiples of 10 or not. (USE EVERY FUNCTION)
let numbs = [10, 20, 30, 40, 50];
let ans = numbs.every((num) => num % 10 == 0);
//console.log(ans);//true
// CREATE A FUNCTION TO FIND THE MIN NUMBER IN AN ARRAY.(USE REDUCE FUNCTION)
function getMin(){
    let min = num.reduce((min, el) => {
        if (min < el){
            return min;
        
        } else {
            return el;
        }
    });
    return min;
}
let num = [10, 2, 30, 4, 50];
let minNumber = getMin();
console.log(minNumber);//2