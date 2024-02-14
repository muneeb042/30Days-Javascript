/* functions make code
    * clean and easy to read
    * reusable
    * easy to test
*/
/* function can be decalred in following ways
    * decleration function
    * expression function
    * anonymous function
    * arrow function 
*/

//function decleration without a parameter
function functionName(){
    //code
}
functionName()//calling function by its name and parenthesis

// function can be decalred without a parameter

function square(){
    let num  = 4;
    let sq = num*num;
    console.log(sq);
}
//calling
square()

//function which doesn't return a value ,its return type is undefined
function addTwo(){
    let numOne = 7;
    let numTwo = 8;
    return numOne+numTwo;
}
console.log(addTwo());

//function with a parameter
//we can pass different data types : number , string, boolean, object, function as parameter

function areaOfCircle(r){
    let area = Math.PI*r*r;
    return area;
}
console.log(areaOfCircle(10));

function sumTwoNumbers(firstNum,secondNum){
    return firstNum+secondNum;
}
console.log(sumTwoNumbers(10,56));


//function taking array as a parameter
function sumArray(arr){
    let sum = 0;
    for( let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
const numm = [1,2,3,4,5,6,7,8];
console.log(sumArray(numm));

//function with many parameters
/* function functionName (parm1, parm2, ...){
    function code goes here
}
*/

//function with unlimited number of parameters
/* sometimes we don't know the number of arguments the user is goingto pass */

//unlimited number of parameters in the regular function
 function sumAllNums(){
    console.log(arguments);
 }
 sumAllNums(1,2,3,4);
 //arguments in the function are accessed from arguments object inside the function
 