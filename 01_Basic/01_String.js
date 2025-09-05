/*
Here we will discuss about String and its important methods 
*/
// Initializing string
const str1 = "This is String without object";
let str2 = "Another String without object"; 
let newstr = new String("String where we can compute different operation");

                        // Manipulating String :- String can be manipulated but these are a type of Stack hence their will be new copy formed and their will be permanent changes happens.

// updatedstr1 = str1("String Updated"); // Can't be updated due to const keyword
// console.log(updatedstr1);

// str2 = "Here is Updated String " String has been updated

                                // Passing String into another string 
/*
// ! Can't be initialized and updated as this is not a function
anotherstring = str2("Another String");
console.log(anotherstring);
*/

// console.log(str1);
// console.log(str2);

                                // Performing Basic Method operations on String 
console.log(newstr.toLowerCase());  // return string in lower case
// string where we can compute different operation

console.log(newstr.toUpperCase());  // return string in upper case
// STRING WHERE WE CAN COMPUTE DIFFERENT OPERATION

// let newNewStr = (newstr.prototype);
// console.log(newNewStr.toLowerCase());

console.log(newstr.slice(0, 10)); // example of +ve passed values
// String whe

console.log(newstr.slice(-20 , -1));  // takes -ve & +ve values and return b\w passed index values
//  different operatio

console.log(newstr.substring(1 , 10));  // Does not take -ve values and return string b\w passed indexes
// tring whe

console.log(newstr.trim());   // Remove extra white spaces
// String where we can compute different operation

console.log(newstr.indexOf('w'));  // return index of Searched character passed else return -1 and is case-sensitive
// 7

console.log(newstr.at(1)); // retrun character at passed index
// t

console.log(newstr.charAt(2)); // same as at return character at passed index
// r

console.log(newstr.replace("we" , "I")); // An object that supports searching for and replacing matches within a string
// String where I can compute different operation

console.log(newstr.includes("sahil")); // checks if given string is present or not 
// false

console.log(newstr.split(" ")); // An object that can split a string.
// [ 'String', 'where', 'we', 'can', 'compute', 'different', 'operation' ]

console.log(newstr[0]); // returns the value at specified index
// S

console.log(str1.concat(str2));
// This is String without objectAnother String without object

console.log(str1.length);  // return total length of string 
// 29