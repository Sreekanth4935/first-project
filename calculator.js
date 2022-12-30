// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const name = (name) => name;
// let value = "Rajeshwariiiiiiiiiiiiiiiiii";

// exports.add = add;
// exports.sub = sub;
// exports.name = name;
// exports.value = value;
// module.exports = (name) => name;
// module.exports = function(a, b) {
//   return a + b;
// };
// module.exports = function sum(a, b) {
//   return a + b;
// };

// module.exports = class StudenDetails {    //while defining exporting
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// };

// class StudentDetials {
//   constructor(name, age, collegeName) {
//     this.name = name;
//     this.age = age;
//     this.collegeName = collegeName;
//   }
// }

// module.exports = StudentDetials;
// let name = "Rajeshwari------------------------>";
// let age = 20;
// exports.name = name;
// exports.age = age;

// let a = 20;
// exports.add = function (a, b) {
//   return a + b;
// };
// exports.sub = function (a, b) {
//   return a - b;
// // };
// function sum(a, b) {
//   return a + b;
// }
// function sub(a, b) {
//   return a - b;
// }

// exports.sum = sum;
// exports.sub = sub;

// exports.studentDetails = class StudentDetails {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// };

// exports.carDetails = class CarDetails {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
// };
class carDetails {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
}
exports.carDetails = carDetails;

class studentDetails {
  constructor(name, age, college, place) {
    this.name = name;
    this.age = age;
    this.college = college;
    this.place = place;
  }
}
exports.studentDetails = studentDetails;
