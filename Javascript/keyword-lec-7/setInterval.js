let id = setInterval(() => {
    console.log("Hello after 3 seconds");
}, 3000);
console.log("test setInterval");
clearInterval(id)