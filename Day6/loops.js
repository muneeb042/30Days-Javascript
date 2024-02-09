/*  for loop
  for( initialization, condition, increment/decrement){
    statements;
  }
*/
for(let i =0;i<=10;i++){
    console.log(i);
}
for(let i = 0;i<=5;i++){
    console.log(`${i}*${i} = ${i*i}`);
}

//creating a new array based on the existing array
const num = [3,4,5,6,7];
const numbers = [];
let sum = 0;
for(let i = 0; i<num.length;i++){numbers.push(num[i]**3);}
console.log(numbers);

//while loop
let i = 0;
while(i<=5){
    console.log(i);
    i++;
}

//do while
let j = 0;
do{
    console.log(i);
    i++;

}while(i<=5)

//for of loop
/* for (const element of array){ code } */
const numm = [2,3,4,5,6,7,8,9,0];
for(const n of numm){console.log(n);}

for(const n of numm){console.log(n*n);}

let summ = 0;
for(const n of numm){
    summ+=n;
}
//break statement is used to interrupt the loop
for( let i = 0;i<=5;i++){
    if(i==3)break;
    console.log(i);
}
//continue statement is used to skip an iteration of a loop
for( let i = 0;i<=5;i++){
    if(i==3)continue;
    console.log(i);
}