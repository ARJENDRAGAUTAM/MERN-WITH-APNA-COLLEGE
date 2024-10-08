function Test() {
    console.log("Hello nothing!");
}

function printNumber() {
    for (let i = 0; i >= 5; i++) {
        console.log(i);
    }
}

function checkAdult() {
    let age = 18;
    if (age >= 18) {
        console.log("You are adult");
    } else {
        console.log("Your are not adult")
    }
}
Test();
printNumber();
checkAdult();