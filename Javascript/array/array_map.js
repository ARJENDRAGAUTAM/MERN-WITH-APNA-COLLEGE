let num = [1,2,3,4,5];
let check = num.map((el) => {  
    return el * 2;
});
console.log(check);
let students = [
    {name: "Kishan",
    marks: " 90",
},
  {
name: "Saurabh",
marks: " 80",
},
{
name: "Sachin",
marks: " 85",   
  }  
];
let gpa = students.map((student) => {
    return student.marks/10
})
console.log(gpa);