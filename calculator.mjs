// export const add = (a, b) => a + b;
// export const sub = (a, b) => a - b;
// export const name = (name) => name;
// export default let value = 5;  error we can get

// let value = "rajeshwari<<------------@@@@@#################-------->>:)";
// export default value = value;
// export default 5 * 30;

// export default function sum(num1, num2) {
//   return num1 + num2;
// }

// function sub(num1, num2) {
//   return num1 - num2;
// }

// export default sub;

//while defining the class we can export
// export default class studentDetails {
//   constructor(name, age, college, grade) {
//     this.name = name;
//     this.age = age;
//     this.college = college;
//     this.grade = grade;
//   }
// }

// after defining the class we can export
// class studentDetails {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }
// export default studentDetails;

// export let value = 10;
// export let name = "rajeshwari";

//after defining values we can export

// let name = "raji=====@@@@-----------------88889899996-----------000=";
// let age = 22;
// export { name, age };

// export function add(num1, num2) {
//   return num1 + num2;
// }
// export function sub(num1, num2) {
//   return num1 - num2;
// }

//after defining
// function sum(a, b) {
//   return a + b;
// }
// function sub(a, b) {
//   return a - b;
// }
// export { sub, sum };

//exporting class while defining;
// export class studentDetails {
//   constructor(name, rank) {
//     this.name = name;
//     this.rank = rank;
//   }
// }
// export class carDetails {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

//after defining class we can export

class studentDetails {
  constructor(name, age, dob, college) {
    this.name = name;
    this.age = age;
    this.dob = dob;
  }
}

class collegeDetails {
  constructor(collegeName, location) {
    this.collegeName = collegeName;
    this.location = location;
  }
}

export { studentDetails, collegeDetails };
