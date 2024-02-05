// non primitive data types -- objects and arrays
/* non primitive data types are mutable*/

let nums = [1,2,3,4];
nums[0] = 7;
console.log(nums);

// non primitive data types cannot be equal
let arr1 = [1,2,3];
let arr2 = [1,2,3];
console.log(arr1=arr2); //false

// non primitive data types are compared by refrence instead of value
let userOne ={
    name:'muneeb',
    country: 'India',
    city: 'Anantnag'
}
let userTwo = {
    name : 'Muneeb',
    country: 'India',
    city: 'Anantnag'
}
console.log(userOne=userTwo); // false

//two objects are strictly equal if they refer to the same underlying object
let num = [1,2,3];
let numss = num;
console.log(num=numss); // true

let user1 = {
    name : 'Muneeb',
    country: 'India',
    city: 'Anantnag'
}
let user2 = user1
console.log(user1=user2);//true

