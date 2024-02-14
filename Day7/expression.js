//expression functions are anonymous functions
//after we create the function without name we assign it to a varaible

const squared = function(n){
    return n*n;
}
console.log(squared(65));

//self invoking functions 
//anonymous functions which do not need to be called to return a value
(function(n){
    console.log(n*n)
})(2);

//returning the value instead of printing
let squaredNum = (function(n){
    return n*n;
})(65);
console.log(squaredNum);