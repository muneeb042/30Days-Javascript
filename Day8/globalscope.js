let a ='javascript';//global scope will be found anywhere in the file
let b = 10; //global scope

function sccope(){
    console.log(a,b);//javascript 10 is accessible
    if(true){
        let a = 'python';
        let b = 100;
        console.log(a,b);//local scope overwrites the global
    }
    console.log(a,b);
    
}
sccope();
console.log(a,b);//javascript 10 is accessible
