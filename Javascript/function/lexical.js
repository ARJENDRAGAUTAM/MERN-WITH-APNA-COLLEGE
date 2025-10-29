// a variable defined outside a function can be accessible inside another function defined after the variable declaration.[the opposite is NOT true.]
function outerFun(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        console.log(x);
        console.log(y);
    }
    innerFunc(x);
}

// Practice Question- what will be the output?
let greet = "hello";// global scope
function changeGreet(){
    let greet = "namaste";// function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet);// lexical scope
    }
    // innerGreet();
}
console.log(greet);
changeGreet();
