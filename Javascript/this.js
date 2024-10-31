const student = {
    name: "arjendra",
    age: 23,
    eng: 95,
    math:98,
    phy:56,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}
student.getAvg();