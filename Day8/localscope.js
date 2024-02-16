//block scope {}
let a ='javascript';//global scope will be found anywhere in the file
let b = 10; //global scope

function scccope(){
    console.log(a,b);//javascript 10 is accessible
    let value =false;
    if(true){
        //variables declared inside the function are not accessible outside the function
        let a = 'python';
        let b = 100;
        let c =30;
        let d = 40;
        value =!value;
        
        console.log(a,b,c,value);//local scope overwrites the global
    }
    console.log(a,b,value);//we cannot access c and d here
    
}

/* variable declared with let or const is block scope(function block,if block,loop block etc)
 variable declared with var only scoped to function */

 //function scope
 function localscope(){
    var gravity = 9.81;
    console.log(gravity);
 }

 // accessing gravity here will cause refrence error 
 // console.log(gravity)

 if(true){
    var gravity = 9.81;
    console.log(gravity);
 }
 console.log(gravity); //gravity can be accessed here

 for(var i=0;i<3;i++){
    console.log(i);

 }
 console.log(i);


 for(let i=0;i<3;i++){
    console.log(i);

 }
 console.log(i);//will cause uncaught refrence


 function localScope(){
    const gravity = 9.81;
    console.log(gravity);
 }
 //accessing gravity here will cause refrence error
 // console.log(gravity);