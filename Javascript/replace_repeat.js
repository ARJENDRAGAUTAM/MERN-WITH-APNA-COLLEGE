//replace
let str = "Hello Arjendra!";
let newstr = str.replace("Hello", "Aey");
// console.log(newstr);
// console.log(str);
//repeat
let str1 = `Hello Universe   `;
let newstr1 = str1.repeat(4);
// console.log(newstr1);
// Practice Q-1?
let msg = "hello!";
let newmsg = msg.trim().toUpperCase();
// console.log(newmsg);

// Q-2
let name = "ApnaCollege";
let check = name.slice(4,9);
// console.log(check);
let check2 = name.indexOf("na");
// console.log(check2);
let check3 = name.replace("Apna","Our");
// console.log(check3);
// expected output:Colle,2,OurCollege
// Q-3
let check4 = name.replace("l","t").replace("l","t");
console.log(check4);
// expected output:ApnaCottege