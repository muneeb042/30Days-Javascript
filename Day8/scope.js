//variables can be global and local
//anything declared without let , var and const is scoped global

//window global object

a = 'Javascript';
b =10;
function scope(){
    console.log(a,b);
    if(true){
        console.log(a,b);
    }
}
scope();
console.log(a,b);