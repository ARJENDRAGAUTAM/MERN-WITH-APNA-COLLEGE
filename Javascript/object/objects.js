// console.log(student);
const post = {
    username : "ArjendraSingh",
    content : "This is my first post #hello_nothing",
    likes : 156,
    reposts : 7,
    tags : "@aka,@kaushal,@satya",
}
// console.log(post);
// console.log(post["likes"]);
// HOW TO ADD & UPDATE
const student = {
    name : "arjendra",
    age : 23,
    marks : 80,
    city : "Gurgaon",
};
//  update value
// console.log(student.city);
student.city = "carlifonia";
// console.log(student.city);
// add value
student.gender = "male";
// console.log(student);
// delete key
delete student.gender;
// console.log(student);
//  nested objects
const stafInfo = {
    arjendra: {
        designation: "chief executive",
        expertise: "technical & bussiness dev",
       place: "Gurgaon"
    },
    mithun:{
        designation: "chief executive",
        expertise: " bussiness dev",
        place: "Gurgaon"
    },
    bijendra:{
        designation: "executive",
        expertise: "intern",
        place: "Gurgaon"
    },
}
// console.log(stafInfo.arjendra.place);
// Array of objects
const classInfo  = [
    obj1 = {
        name:"arjendra",
        age:23,
        gender: "male",
        city:"Gurgaon",
    },
    obj2 = {
        name:"kaushal",
        age:23,
        gender: "male",
        city:"New delhi",
    },
    obj3 = {
        name:"satyam",
        age:23,
        gender: "male",
        city:"UK",
    },
]

console.log(classInfo[2].city)