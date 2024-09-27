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
let fruits = ["mango","apple","litchi","orange"];
// for(let i = 0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }
for(let i =fruits.length-1;i>=0; i--){
    console.log(i,fruits[i]);
}