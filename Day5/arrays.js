// array is a collection of different data types which are ordered and modifiable.
// array allows storing duplicate elements and different data types. array can be empty


//using array constructor
const arr = Array(); //or let arr = new Array();
console.log(arr);

//using square brackets []
const arr1 = [];
console.log(arr1); // recommended way to create empty list

const numbers = [0,4,5,34,99.87,98,76];
const fruits = ['banana','orange', 'mango', 'lemon'];

//array length
console.log('Numbers : ', numbers);
console.log('Number of Numbers:',numbers.length);

console.log('Fruits : ', fruits);
console.log('number of fruits: ',fruits.length);

//array can have items of different types
const ar = ['muneeb', 24,true,{country : 'India', city : 'Anantnag'}, 
{ skills : ['html','css','javascript']}];
console.log(ar);


//creating an arary using split 
let js = 'javascript';
const charInJavascript = js.split('');
console.log(charInJavascript);

let companies = 'facebook, google, microsoft, apple, ibm, oracle, amazon';
const com = companies.split(',');
console.log(com);

