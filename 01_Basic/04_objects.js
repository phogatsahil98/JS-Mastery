//! Objects -> These are the reference data type in JavaScript and are used to store collections of data and more complex entities.

// Creating an object
const person = {
    name: "John",
    age: 30,
    isStudent: false
};  
// console.log(person); // { name: 'John', age: 30, isStudent: false }
// console.log(typeof person); // object
// console.log(person.name); // John
// console.log(person["age"]); // 30

// Adding properties to an object
person.email = "john@example.com";
// console.log(person.email); // john@example.com
person["phone"] = "123-456-7890";
// console.log(person.phone); // 123-456-7890

// Modifying properties of an object
person.age = 31;
// console.log(person.age); // 31

// Deleting properties from an object
delete person.isStudent;
// console.log(person.isStudent); // undefined

// Nested objects
const student = {
    name: "Alice",
    age: 22,
    address: {
        street: "123 Main St",
        city: "Wonderland",
        zip: "12345"
    }
};
// console.log(student.address.city); // Wonderland
// console.log(student["address"]["zip"]); // 12345
student.address.country = "Fictional";
// console.log(student.address.country); // Fictional
student["address"]["country"] = "Fictionland";
// console.log(student.address.country); // Fictionland

// Deleting nested property
delete student.address.zip;
// console.log(student.address.zip); // undefined

// console.log(typeof student.address); // object
// console.log(student.address.street); // 123 Main St
// console.log(student.address["city"]); // Wonderland
// console.log(student.address.country); // Fictionland
// console.log(student.address.zip); // undefined


// Object methods
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    getCarInfo: function() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
};
// console.log(car.getCarInfo()); // Toyota Camry (2020)

// Looping through object properties
for (let key in car) {
    // console.log(`${key}: ${car[key]}`);
}
// brand: Toyota
// model: Camry
// year: 2020
// getCarInfo: function() { return `${this.brand} ${this.model} (${this.year})`; }

for (let value of Object.values(car)) {
    // console.log(value);
}
/*
Toyota
Camry
2020
[Function: getCarInfo]
*/

// console.log(Object.keys(car)); // [ 'brand', 'model', 'year', 'getCarInfo' ]
// console.log(Object.values(car)); // [ 'Toyota', 'Camry', 2020, [Function: getCarInfo] ]
// console.log(Object.entries(car)); // [ [ 'brand', 'Toyota' ], [ 'model', 'Camry' ], [ 'year', 2020 ], [ 'getCarInfo', [Function: getCarInfo] ] ]


// Merging objects
const obj = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj, ...obj2 };
// console.log(mergedObj); // { a: 1, b: 3, c: 4 }

//! Above were Done by Github Copilot
//? Now it's my turn to apply what i have learned
//? Creating an object literals
const objLieral = {
    "full name" : "Sahil Phogat",
    "Phone Number": 345678987654,
    gender : "Male"
}

// console.log(objLieral);
/* 
*Output 
{
  'full name': 'Sahil Phogat',
  'Phone Number': 345678987654,
  gender: 'Male'
}
*/
// console.log(objLieral["full name"]); // Sahil Phogat
// console.log(objLieral.gender); // Male
// console.log(objLieral["Phone Number"]); // 345678987654

//TODO Adding into object
objLieral.ownCar = true;
objLieral.age = 18;
// console.log(objLieral); 

//TODO Deleting an entry into an object
// delete objLieral["Phone Number"];
// console.log(objLieral["Phone Number"]); 
/*
{ 'full name': 'Sahil Phogat', gender: 'Male', ownCar: true }
*/

//TODO Checking if object has key or not 
// console.log(objLieral.hasOwnProperty("Phone Number")); // Returns True 

//TODO Updating Value 
objLieral.age = 19;
// console.log(objLieral.age); // 19

//! Creating Object through Constructor 
const key = Symbol("key1");

class ObjByCons_{
    constructor(fullName, id, isAdmin, keyValue) {
        this.fullName = fullName;
        this.Id = id;
        this.isAdmin = isAdmin;
        this[key] = keyValue;
    }

    greet() {
        return `Hello, ${this.fullName}`;
    }
}

const obj1 = new ObjByCons_("Sahil Phogat", 10001, true, "This is symbol value");

// Output
// console.log(obj1);
// console.log(obj1.greet());
// console.log(obj1[key]); // Symbol access


//! Using Constructor Function 
// Symbol define karte hain
const key_ = Symbol("key1");

// Constructor Function
function ObjByCons(fullName, id, isAdmin, keyValue) {
    this.fullName = fullName;
    this.Id = id;
    this.isAdmin = isAdmin;
    this[key_] = keyValue; // Symbol ko [] ke andar hi use karna padega
}

// Object banate hain constructor se
const obj_1 = new ObjByCons("Sahil Phogat", 10001, true, "This is symbol value");

// Output
// console.log(obj_1); 
/*
ObjByCons {
  fullName: 'Sahil Phogat',
  Id: 10001,
  isAdmin: true,
  [Symbol(key1)]: 'This is symbol value'  
}
*/
// console.log(obj_1.fullName); //Sahil Phogat
// console.log(obj_1[key_]); // Symbol value access karne ka sahi tareeqa  //?Output : This is symbol value

//! Class Syntax
class User {
    constructor(name, id, isAdmin) {
        this.name = name;
        this.id = id;
        this.isAdmin = isAdmin;
    }

    greet() {
        return `Hello, ${this.name}`;
    }
}

const user1 = new User("Sahil", 1001, true);
// console.log(user1.greet()); // Hello, Sahil

// TODO Concatenating object Method 
// console.log(Object.assign({}, obj1 , obj2));
/*
{
  fullName: 'Sahil Phogat',
  Id: 10001,
  isAdmin: true,
  b: 3,
  c: 4,
  [Symbol(key1)]: 'This is symbol value'  
}
*/

// TODO Concatenating objects using Spread operator
// console.log({ ...obj1, ...obj2 });
/*
{
    fullName: 'Sahil Phogat',
    Id: 10001,
    isAdmin: true,
    b: 3,
    c: 4,
    [Symbol(key1)]: 'This is symbol value'
}
*/

//! If we talk in terms of fetching data from the database then it comes in the form of array, so we can access them like this
const userDetails = [
    {
        "Full Name" : "Sahil Phogat",
        mail : "phogat@google.com"
    },
    {
        "Full Name ": "Savita Phogat",
        mail : "savita@microsoft.com"
    },
    {
        "Full Name":"Kavita Phogat",
        mail : "kavita@spaceX.com"
    }
]
//* console.log(userDetails);
/*
[
  { 'Full Name': 'Sahil Phogat', mail: 'phogat@google.com' },
  { 'Full Name ': 'Savita Phogat', mail: 'savita@microsoft.com' },
  { 'Full Name': 'Kavita Phogat', mail: 'kavita@spaceX.com' }
]
*/
// Also we can access these object through index
// console.log(userDetails[2]); //* { 'Full Name': 'Kavita Phogat', mail: 'kavita@spaceX.com' }
 
// And we also can apply object property on it 
// console.log(userDetails[2]["Full Name"]);  //* Kavita Phogat

//? To Get keys only 
// console.log(Object.keys(userDetails));  //* [ '0', '1', '2' ]

//? To get the Value 
//* console.log(Object.values(userDetails));
/*
[
  { 'Full Name': 'Sahil Phogat', mail: 'phogat@google.com' },
  { 'Full Name ': 'Savita Phogat', mail: 'savita@microsoft.com' },
  { 'Full Name': 'Kavita Phogat', mail: 'kavita@spaceX.com' }
]
*/

//! Destructuring of object 
const admin = {
    name: "Sahil Phogat",
    age: 21,
    isAdmin: true
};

// Destructuring
const { name, age, isAdmin } = admin;
/*
console.log(name);     // Sahil Phogat
console.log(age);      // 21
console.log(isAdmin);  // true
console.log(admin); // { name: 'Sahil Phogat', age: 21, isAdmin: true }
*/

//! Example 2: Destructuring with Aliases (renaming)
const user = {
    fullName: "Sahil Phogat",
    id: 1001
};

// Rename while destructuring
const { fullName: username, id: userId } = user;

// console.log(username); // Sahil Phogat
// console.log(userId);   // 1001

//? Self Taught 
const givenObject = {
    inputName : "Sahil Phogat",
    isActive : "Active",
    age : 25
}

// Destructuring of an object 
const {inputName : name_ , isActive : active , age : dob } = givenObject
console.log(name_); // Sahil Phogat
console.log(active);  // Active
console.log(dob);  // 25
