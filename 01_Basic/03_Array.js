// Declaring An Array 
let Array_0 = [7, 6, 5, 4, 3];
let Array_1 = new Array(8, 7, 6, 5, 5, 6);
// console.log(Array_0.length);   
// console.log(Array_1.length);   

//? Explicitely Set the Length of the Array 
// Array_0.length = 2;
// console.log(Array_0.length);

//? Converting Array into String 
// console.log(Array_0.toString()); 

const Fruits = new Array ("Apple" , "Peach" , "Coconut" , "Banana");
//? To Get the Element by passing index
// console.log(Fruits[2]);  //* Coconut
// console.log(Fruits.at(1));  //* Peach

//? To Seprate elements Using Join
/*
console.log(Fruits.join(" "));
TODO :  It will return Values with space in between
* Output : Apple  Peach Coconut Banana
*/
// console.log(Fruits.join(" - "));  // Apple - Peach - Coconut - Banana

//? To add Element in an Array 
Fruits.push("Cherry"); // Add String at the end of an Array
Fruits.unshift("Mango");  // Add String at the 0th index
// console.log(Fruits);  //* [ 'Mango', 'Apple', 'Peach', 'Coconut', 'Banana', 'Cherry' ]

//? To Delete an Element
Fruits.pop()  // Delete an ELement at the end of Array
Fruits.shift() // Delete an Element at the 0th index of an Array
// console.log(Fruits);  //* [ 'Apple', 'Peach', 'Coconut', 'Banana' ]

//? Altering an element with Square bracket 
Fruits[2] = "Grapes";
// console.log(Fruits);  //* [ 'Apple', 'Peach', 'Grapes', 'Banana' ]

//TODO :  Fruits.at(1) = "Oranges";
// console.log(Fruits);  //* Will Generate an Error Can't assign any Value

//? Implementing Length Method
// console.log(Fruits.length);  //* 4
Fruits[Fruits.length] = "Litchi";
// Here We took last index of Fruits using length property and inseted an element using square brackets 
// console.log(Fruits);  //* [ 'Apple', 'Peach', 'Grapes', 'Banana', 'Litchi' ]

//TODO: Operations on Array
const Array_Op_1 = ["Hi" , ", ", "I" , "am"];
const Array_Op_2 = ["Sahil"];
//? Concating an array using concat() Method
const newArr = Array_0.concat(Array_1);
// console.log(newArr);  
/*
*[
*  7, 6, 5, 4, 3,
*  8, 7, 6, 5, 5,
*  6
*]
*/
// console.log(Array_Op_1.concat(Array_Op_2));  //* [ 'Hi', ', ', 'I', 'am', 'Sahil' ]
/*
-> Join Two Array and give New Array
-> Take n Number of Array
-> Doesn't alter existing Array
*/
 
//* Original Array : [ 8, 7, 6, 5, 5, 6 ] 
// console.log(Array_1.copyWithin(0 , 1, 3)); //* [ 7, 6, 6, 5, 5, 6 ] -> 2nd and 3rd tells from where to end
// console.log(Array_1.copyWithin(2 , 1, 3)); //* [ 7, 6, 6, 6, 5, 6 ]  -> ist letter define index to start of copy
/*
-> Method Will Overwrite the existing Value
-> Methods doesnot push the element into the array
-> Method doesn't change the size or length of an array
*/

const arrayInsideArray1 = [[2], [3,4] , [5, [6 , [7]]]];
const arrayInsideArray2 = [2, 5, [5], [0]];
// console.log(arrayInsideArray1.flat(Infinity)); //* [ 2, 3, 4, 5, 6, 7 ]  -> Create new array and flat till infinity
console.log(...arrayInsideArray1 ,...arrayInsideArray2);
