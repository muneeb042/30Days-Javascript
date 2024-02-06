//typeof() is used to check the data type of variables
console.log(typeof 3.14);

let variable = 'muneeb';
console.log(typeof variable);

console.log(typeof NaN);
console.log(typeof undefined);

// typecasting means changing the datatype to another data type

// string to int, casting can be done through these three methods
/* 1. parseint()
   2. Number()
   3. Plus sign +
   */

let ss = '10097';
let ssInt = parseInt(s);
console.log(ssInt);

console.log(Number(ss));

console.log(+ss);

//string to float
let sss = '9.81';
console.log(parseFloat(sss));
console.log(Number(sss));
console.log(+sss);

//float to int
let nume = 8.89;
console.log(parseInt(nume));