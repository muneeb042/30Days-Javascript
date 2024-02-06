// assignment operators

/*       operator

         assignment   =
         +=
         -=
         *=
         /=
         %=
         **=

*/


//arithemetic operators

/*      addition +
        subtraction -
        multiplication *
        division /
        modulus %
        exponential **
 */


let initialVelocity = 10;
let acceleration = 5;
let time = 100;
let finalVelocity = initialVelocity + acceleration*time;
console.log(finalVelocity);
console.log(`The final velocity of a body which has initial velocity ${initialVelocity}m/s \n \
moving with an acceleration of ${acceleration}m/s2 after time ${time}s will be ${finalVelocity}m/s`);


//comparision operators
/*      == equal in value : equivalent
        === exactly equal : equal in value and datatype
        !=  not equal
        >
        <
        >= 
        <=
*/

console.log(3>4); //false

console.log(0==false); //true : equivalent

console.log(1===true); //false : not exactly the same

console.log(undefined==null); // true
console.log(undefined===null);// false

console.log(NaN==NaN); //false
console.log(NaN==NaN); //false

// if a value is not true with == it will not be true with ==


//logical operators, return true or false

/*              && AND
                || OR
                ! NOT
*/
const and = 5>6 && 4<6;
const or = 4>3||5>6;
const not = !(5>4);

//Increment operator and decrement operator
//pre increment/decrement and post increment/decrement
let count = 0;

console.log(++count);
console.log(count++);
console.log(count);


//ternary operators
let isRaining = true;
isRaining ? console.log('you need a rain coat'):console.log('No need for a rain coat');
isRaining = false;
isRaining ? console.log('you need a rain coat'):console.log('No need for a rain coat');
