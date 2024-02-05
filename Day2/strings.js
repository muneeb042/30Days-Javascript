//characters within single , double or backticks

//string decleration
let space = '  ';
let firstName = 'muneeb';
let lastName = 'ganie';
let age= 24;
let country = 'India';
let city = 'Anantnag';

//string concatenation using addition operator 
let fullName = firstName + space + lastName;

console.log(fullName);

let personalInfo = 'My name is ' + fullName + '. I am ' + age + '.  I live in '+ city+ ' city of country '+ country;
console.log(personalInfo);

// long literal strings
/* strings could be a single char , a paragraph or a page.
backslash character is used to indicate strings continues in next line*/
const paragraph = "My name is Muneeb Ahmad Ganie. I live in India, Anantnag. \
I am a programmer and i love programming. strings could be a single char , a paragraph \
or a page. Backslash(\) character is used to indicate strings continues in next line "

console.log(paragraph);


// escape sequence in strings 
/*   new line -- \n
     tab means 8 spaces -- \t
     backslash -- \\
     single quote -- \'
     double quote -- \"
*/

console.log('My name is Muneeb Ahmad Ganie. I live in India, Anantnag.\nI am a programmer and i love programming.');
console.log('Days \t Topics \t Excercises');
console.log('day1 \t t2 \t e2' );
console.log('day2 \t t7 \t e6' );
console.log('day3 \t t9 \t e8' );

console.log('this is a backslash symbol (\\)');
console.log('\'hello world\'');

// template strings -- use backticks
// we can inject data as expressions inside template strings
// to inject data we enclose the expressions inside curly braces {} preceded by a $ sign

`string literal text or string template`
//`string literal text or string template ${expression}`

let a =2;
let b=4;
console.log(`The sum of ${a} and ${b} is ${a+b}`); //injecting the data dynamically

console.log(`${a} is greater than ${b}: ${a>b}`);//false
