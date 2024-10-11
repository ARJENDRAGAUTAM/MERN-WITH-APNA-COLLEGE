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

// Practice Question- 