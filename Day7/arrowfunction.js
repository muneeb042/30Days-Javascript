//arrow function uses arrow instead of keyword function to declare a function

//normal function 

function cube(n){
    return n*n*n;
}
console.log(cube(6));

//arrow function
const cubed = n =>{
    return n*n*n;
}

console.log(cubed(3));
//if we have only one line in the block it can be written as 
const cubee = n=>n*n*n;


//change to upper case
const changeToUpperCase = arr =>{
    const newArr = [];
    for(const element of arr){
        newArr.push(element.ToUpperCase());
    }
    return newArr;
}

const countries = ['india','pakistan','nepal','bangladesh','china'];
console.log(changeToUpperCase(countries));


const printFullName = (firstName,lastName)=>{
    return `${firstName} ${lastName}`;
}
//const printFullName = (firstName,lastName)=>`${firstName}${lastName}`
console.log(printFullName('Muneeb','Ganie'));


//function with default parameters
//if we dont pass an argument to the function , default value is used
function functionNamee(param = value){
    //code goes here
}
//callling the function 
functionNamee();
functionNamee(arg);

function generateFullName(firstName = 'Muneeb',lastName= 'Ganie'){
    let space= ' ';
    let fullName= firstName +space+lastName;
    return fullName;
}

console.log(generateFullName());
console.log(generateFullName('david','abdullah'));

//default parameter with arrow functions
const greetings = (name='Peter')=>{
    let message= name +' '+'welcome to 30 days of javascript';
    return message;
}
console.log(greetings());
console.log(greetings('Muneeb'));