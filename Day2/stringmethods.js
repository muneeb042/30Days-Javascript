
//everything in javascript is object. string object has a lot of methods


//length
let jsa = 'javascript';
console.log(jsa.length);// returns number of characters in the string including the space

//accessing the characters in the string
let string = 'Muneeb Ahmad Ganie';
console.log(string[0]);
console.log(string[8]);

//toUpperCase()
console.log(string.toUpperCase());

//toLowerCase()
console.log(string.toLowerCase());

//substr() -- takes two arguments , starting index and number of characters
console.log(string.substr(4,8));


//substring()-- takes two arguments, starting index and stopping index, but it doesn't include the char at the stopping index
console.log(string.substring(4,12));

//split()-- splits a string at a specified place
console.log(string.split());//changes to an array
console.log(string.split(' ')); // splits the string to an array  at a space
console.log(string.split(''));//splits the string to an array at each character

let string1 = '  xaid ahmad ganie  '
// trim()-- removes trailing spaces in the begining or at the end of a string
console.log(string1.trim(' '))
console.log(string1.trim());

// includes()-- takes substring as argument and checks if that substring exists in the substring
// returns boolean
console.log(string1.includes('aid'));
console.log(string.includes('ahae'));

//replac() -- takes arguments old substring and new substring and replaces it 
console.log(string1.replace('xaid', 'zaid'));

//charAt()--takes an index and returns the character at that index
console.log(string.charAt(9));

let lastIndex = string.length -1;
console.log(string.charAt(lastIndex));

//charCodeAt()-- takes index and returns ascii value of char at that index
console.log(string.charCodeAt(0));

//lastIndexOf()--takes substring as input and returns last position of the substring if it exists otherwise returns -1 
console.log(string.lastIndexOf('you'));
console.log(string.lastIndexOf('uneeb'));

//concat()-- concatenates  strings
console.log(string.concat(' string'));

let s = '30';
console.log(s.concat('days ','of ','coding ', 'with ', 'javascript.')); 


//startsWith()-- takes a substring as an argument and checks if the string starts with specified substring
//returns a boolean value
let words = 'This is a javascript tutorial';
console.log(words.startsWith('This'));

//endsWith() takes a substring as argument and checks if the string ends with this substring
console.log('tutorial');

//search()-- takes a substring as an argument and returns its first index of the match
let sentence = 'i am coding in javascript. 30 days javascript tutorial. javascript is a cool programming language';
console.log(sentence.search('coding'));

//match()-- takes a substring or regular expression pattern as an argument and it returns an array if there
//match . if not it returns null
//regex starts with / and end with / 
let pattern = /coding/
let pattern1 = /coding/gi // g means to search in whole text , i means case sensitive

console.log(sentence.match(pattern));
console.log(sentence.match(pattern1));

let regex = /\d+/g // \d means a digit, + means one or more, g means global i.e, search in the whole sentence
console.log(sentence.match(regex));

//repeat()-- takes a string and returns the repeated version of the string
console.log(string.repeat(10));
