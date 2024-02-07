//Array constructor -- to create an array
const a = Array();//creates an empty array
console.log(a);

const eightEmptyValues = Array(8);
console.log(eightEmptyValues);

//creating static values with fill
const arr2 = Array();
console.log(arr2);
const eightXvalues = Array(8).fill('X');//creates eight element values filed with X
console.log(eightXvalues);

const four3values = Array(4).fill('3');

//Concatenating array using concat()
const firstarray = [1,2,3,2,5,8,3];
const secondarray = [4,5,2,5,6];
const thirdarray = firstarray.concat(secondarray); // concatenates two arrays 
console.log(thirdarray);

//array length
console.log(thirdarray.length);

//getting index an element in array -- indexOf()
console.log(thirdarray.indexOf(4));

//checking if an element exists in array
const fruits1 = ['banana','orange','mango','apple'];
let index = fruits1.indexOf('banana');
index === -1?console.log('This fruit doesn\'t exist in array'):console.log('this fruit exist in the array');


//getting last index of array element
console.log(thirdarray.lastIndexOf(2));

//includes()--to check if an array exists in array
console.log(thirdarray.includes(5));

//isArray()--checks if the data type is an array
console.log(Array.isArray(thirdarray));

//converting an array to string -- toString()
console.log(thirdarray.toString()); //separated by commas

//join array elements
//join()--  by default joins with comma and returns as string
console.log(thirdarray.join());

// join(' ')-- joins array elements with space
console.log(thirdarray.join(' '));

//splice()--takes three parameters starting position,number of times to be removed and number of items to be added
const arr3 = [1,2,3,4,5,6];
arr3.splice();
console.log(arr3); //removes all items

const arr4 = [1,2,3,4,5,6];
arr3.splice(0,1); // removes the first item


const arr5 =[1,2,3,4,5,6];
arr4.splice(3,3,7,8,9); // removes three items and replace three items
//[1,2,3,7,8,9]


//push: adding an element in the end of existing array
//pop:removes an element at the end of array
arr5.push(8);
arr5.pop();

//shift: removing an element from the begining
arr5.shift();

//unshift()--adding an element from the begining
arr5.unshift(9);

//reversing an array
arr5.reverse(); 

//sorting an array
arr5.sort();//sort takes a call back function

//Array of arrays
const arrayOfArrays = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arrayOfArrays[0]);





