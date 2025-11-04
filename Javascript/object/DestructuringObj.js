//Destructuring in Objects: Storing values of an object into multiple variables.
let person = {
    name: "John",
    age: 30,
    city: "New York",
    username: "john_doe",
    password: "securepassword123"
};
let {username: user, password: secret} = person;
console.log(secret);
