const student = {
    name : "Arjendra",
    age:24,
    eng: 85,
    math:98,
    phy:88,
    getAvg(){
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}
student.getAvg();
function getAvg(){
    console.log(this);
}
getAvg();