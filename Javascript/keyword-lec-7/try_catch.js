console.log("hello");
console.log("hello");
try{
    console.log(a);
} catch(error){
    console.log("cought an error... a is not  defined");
    console.log(error)
}
console.log("hello2")
console.log("hello2")
console.log("hello2")



try{
    let jsonString = '{"name": "Arjendra"}';
    let user = JSON.parse(jsonString);
console.log(user.age.toUpperCase());
}
catch(err){
    console.log("An error occurred:",err.message);
}
finally{console.log("execution finshed");}
