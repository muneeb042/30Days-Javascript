// current date and time is created using javascript date object
/*      getFullYear() -- gets the full year as four digits yyyy
        getMonth() -- gets the month as a number 0-11
        getDate()-- gets the day as a number 1-31
        getHours()--get the hour 0-23
        getMinutes()--get the minute 0-59, similarly for seconds 0-59 and miliseconds 0-999
        getTime()-- gets the time as ( milisecond date mmddyyyy )
        getDay()-- get the weekday as number 0-6
*/

// creating the time objects
const now = new Date(); // provides full info about time
console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());


// get time
console.log(now.getTime()); // gives time in miliseconds

const allSeconds = Date.now();
console.log(allSeconds);

const timeinSeconds = new Date().getTime();
console.log(allSeconds==timeinSeconds); //true


// human redeable form 
const now1 = new Date();
const year = now1.getFullYear();
const month = now.getMonth() +1 ;//as month returns 0-11
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();

console.log(`${date}/${month}/${year} ${hours}:${minutes}`);





        