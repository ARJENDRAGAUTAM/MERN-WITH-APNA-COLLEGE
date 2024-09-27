// let i = 0;
// while(i<=20){
//     console.log(i);
//     i++;
// }
// let i = 20;
// while(i>=0){
//     console.log(i);
//     i--;
// }

// FavMovie@@@@@@@@@@@@@@Game
// let favmovie = "Avtar";
// let guess = prompt("");
// while((guess!=favmovie)&&(guess!='quit')){
//     console.log("wrong");
//     guess = prompt("");
// }
// if(guess == favmovie){
//     console.log("Congrats!!")
// }
// else{
//     console.log("you quit")
// }

//use loops in array
// let fruits = ["mango","apple","litchi","orange"];
// // for(let i = 0; i<fruits.length; i++){
// //     console.log(i, fruits[i]);
// // }
// for(let i =fruits.length-1;i>=0; i--){
//     console.log(i,fruits[i]);
// }
// nested loops and nested array
// let heroes = [["baba",  "saheb","periyar"," osho"],["shaktiman","ironman","thor","krish"]];
// for(let i=0; i<heroes.length; i++){
//     console.log(i,heroes[i],heroes[i].length);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(`j=${j}, ${heroes[i][j]}`);
//     }
// }

// Example:2
let student = [["Nothing",2,"everything",3],["world",1,"country",-1]];
for(let i = 0; i < student.length; i++){
    console.log(i,student.length)
    for(let j = 0; j < student[i].length; j++){
        console.log( student[i][j])
    }
}