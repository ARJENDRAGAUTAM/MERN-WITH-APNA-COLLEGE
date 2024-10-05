// let absolute = Math.abs(45);
// console.log(absolute);
// // let usePI = 2*Math.PI();
// // console.log(usePI)
// // let E = Math.E();
// // console.log(E);
// let power = Math.pow(5,5);
// console.log(power)
// let roundof = Math.floor(5.96648);
// console.log(roundof);
// let largerRoundof = Math.ceil(5.4);
// console.log(largerRoundof);
let value = Math.random() * 10000;
let OTP = Math.ceil(value) + 1;
let CompleteOTP = OTP + 1000;
console.log(CompleteOTP);
function generateOTP() {
    // Generate a random number between 0 and 9999
    let otp = Math.floor(Math.random() * 10000);
  
    // Ensure the OTP is always 4 digits by padding with zeros
    return otp.toString().padStart(4, '0');
  }
  
  console.log(generateOTP()); // Example output: "1234"
  