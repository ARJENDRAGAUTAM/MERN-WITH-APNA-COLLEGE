console.log("Hi there!")
setTimeout( () => {
    console.log("Hello Arjendra")
},5000);
console.log("Welcome Arjendra! our multiverse");

console.log("Before setTimeout");
setTimeout(() => {
    console.log("Hello after 3 seconds");
}, 3000);
console.log("after setTimeout");