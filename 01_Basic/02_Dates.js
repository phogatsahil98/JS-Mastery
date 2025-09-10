/*
The Date object in JavaScript is used to work with dates and times. It represents a single moment in time in a platform-independent format, measured in milliseconds since the Unix Epoch (January 1, 1970, UTC).
Key Features of the Date Object


Creating a Date Object:

new Date() - Creates a new Date object with the current date and time.
new Date(milliseconds) - Creates a Date object using milliseconds since the epoch.
new Date(dateString) - Parses a date string and creates a Date object.
new Date(year, month, day, hours, minutes, seconds, milliseconds) - Creates a Date object with specific components.
*/
const newDate = new Date(123456789);
// console.log(newDate); //1970-05-23T15:25:43.545Z
// console.log(newDate.toString()); // Sat May 23 1970 20:55:43 GMT+0530 (India Standard Time)
// console.log(newDate.getDate()); // 23
// console.log(newDate.getFullYear()); // 1970

/*
Common Methods:

Get Methods:
getFullYear() - Gets the year.
getMonth() - Gets the month (0-11).
getDate() - Gets the day of the month (1-31).
getDay() - Gets the day of the week (0-6).
getHours(), getMinutes(), getSeconds(), getMilliseconds() - Gets respective time components.


Set Methods:
setFullYear(year), setMonth(month), setDate(day) - Sets respective date components.
setHours(hours), setMinutes(minutes), etc. - Sets respective time components.
*/
const setDate_1 = new Date(2972, 7, 10);
setDate_1.setMonth(1);
setDate_1.setDate(1);
setDate_1.setFullYear(1972);
// console.log(setDate_1.toLocaleString());
// console.log(setDate_1.getTimezoneOffset()); // shows the difference with respect to UTC time.

/*
Other Useful Methods:

getTime() - Gets the timestamp (milliseconds since epoch).
toISOString() - Converts the date to an ISO 8601 string.
toLocaleDateString() - Converts the date to a localized string.

Examples:
Javascript// Current date and time
const now = new Date();
console.log(now);

// Specific date
const specificDate = new Date(2025, 8, 9); // September 9, 2025
console.log(specificDate);

// Timestamp
const timestamp = Date.now();
console.log(timestamp);
 */
const time = new Date();
// console.log(time); // only added 5 Millisecond : 1970-01-01T00:00:00.005Z
// time.getTime();
// console.log(time) //2025-09-10T00:11:23.857Z
// console.log(time.toTimeString()); // 05:42:13 GMT+0530 (India Standard Time)
// console.log(time.toLocaleString()); // 10/9/2025, 5:43:24 am
// console.log(time.toLocaleTimeString()); // 5:43:24 am
// console.log(time.toLocaleDateString()); //10/9/2025

const timestamp = Date.now();          // number
const date_1 = new Date(timestamp);      // Date object

console.log(date_1.toLocaleString());    // full local date & time
console.log(date_1.toLocaleDateString()); // just date
console.log(date_1.toLocaleTimeString()); // just time


const date = new Date(Date.now());

const formatted = date.getFullYear() + "-" +
    String(date.getMonth() + 1).padStart(2, "0") + "-" +
    String(date.getDate()).padStart(2, "0");

console.log(formatted);  // e.g. "2025-09-10"


const currdate = new Date();
// console.log(currdate.getDate());  // Output : Returns Current date
// console.log(currdate.getFullYear()); // Output : Returns Full Year 2025
// console.log(currdate.getUTCFullYear()) //2025
// console.log(currdate.toLocaleString()) // 10/9/2025, 5:12:17 am



const pastdate = new Date(22 , 0);
// console.log(pastdate.toLocaleDateString()); // Output : 1/1/1922
// console.log(pastdate.toLocaleTimeString());  // Output : 12:00:00 am
// console.log(pastdate.toString()); //Sun Jan 01 1922 00:00:00 GMT+0530 (India Standard Time)

let difference = pastdate.getTimezoneOffset();
// console.log(`The differnece between offset is : ${difference}`); // -330