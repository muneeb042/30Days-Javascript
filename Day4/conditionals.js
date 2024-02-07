
/*      if(condition){ statements} 
         else { statements }   
         
*/

let weather  = 'sunny';
if( weather === 'rainy'){console.log('you need a rain coat');}
else if (weather === 'cloudy'){console.log('it might be cold');}
else {
    console.log('no need for rain coat');
}


//switch is alternate for if else
/*       switch(caseValue){
                case 1: statements
                        break;
                case 2: statements
                        break;
                default:

            }
*/

let number = prompt('Enter a number : ')
switch( true){
    case number>0:
        console.log('Number is positive');
        break;
    case number<0:
        console.log('Number is negative');
        break;
    case number ==0:
        console.log('Number is zero');
        break;
    default:
        console.log('Entered value is not a number');
}

//ternary operators

let age = prompt('Enter your age: ');
age>20? console.log('You are old enough to drive'):console.log(`You are left with ${20-age} years to drive`);