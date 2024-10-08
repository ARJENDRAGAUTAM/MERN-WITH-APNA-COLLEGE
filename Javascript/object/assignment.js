// Q-1- Create a program that generates a random number representing a dice roll. [the number should be between 1 and 6]
let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);
// Q-2- Create an object representing a car that stores the following properties for the car:name, model, color. 
const car = {
    name: "maruti",
    model: "105m",
    color: "white",
};
console.log(car.name);
// Q-3- Create an object person with their name, age and city. edit their city's original value to change it to "New York". Add a new property country and set it to the United states.
const person = {
    name: "anuj",
    age: 18,
    city:"New York",
}
 person.city = "united states";
 console.log(person.city);