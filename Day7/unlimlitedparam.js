//unlimilted parameters in regular function
//using arguments object
function sumAll(){
    let summ=0;
    for( let i=0;i<arguments.length;i++){
        summ+=arguments[i];
    }
    return summ;
}

console.log(sumAll(1,2,3,4,5,6,7,8,9));

//unlimited number of parameters in arrow function
/* arrow function doesn't have the function scoped arguments object.
here we use spread operator followed by parameter name.
arguments passed to arrow function can be accessed as array in the arrow function */

const sumAllNum = (...args) => {
        let sum = 0;
        for(const element of args){
            sum+=element;
        }
        return sum;
}
console.log(sumAllNum(1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1));