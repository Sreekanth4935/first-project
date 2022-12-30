// const sum = require("./calculator");
// const StudentDetails = require("./calculator");
// let value = require("./calculator");
// const { name, age } = require("./calculator");
// const { sum, sub } = require("./calculator");
const { studentDetails, carDetails } = require("./calculator");
// console.log(name);
// console.log(age);

// console.log(add(6, 3));
// console.log(4 - 3);
// console.log(name("rajeshwari"));

// console.log(value);
// console.log(s("raji"));
// console.log(s(24, 26));
// console.log(sum(26, 24));

// const studentDetails = new StudentDetails(
//   "raji--------------------------------------------------->:)",
//   22,
//   "Kakatiya University(KU--------------------------------->):"
// );
// console.log(studentDetails);
// console.log(studentDetails.name);
// console.log(studentDetails.age);
// console.log(studentDetails.collegeName);

// console.log(sum(10, 10));
// console.log(sub(15, 150));

const rajiDetails = new studentDetails(
  "rajeshwar i l u",
  22,
  "k.u",
  "suryapet"
);
console.log(rajiDetails);
console.log(rajiDetails.name);

const newcarDetails = new carDetails("benz", "180kmph");
console.log(newcarDetails);
console.log(newcarDetails.speed);
