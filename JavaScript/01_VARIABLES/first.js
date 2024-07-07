console.log("Welcome to javascript");
name = "vanshika";
console.log(name)
x = null;
y = undefined;
console.log(x);
isFollow = true;
console.log(isFollow);
name = 24;
console.log(name);
// case sensitive
// only letters digits underscore can be first letter
// reserved words cannot be variable names
// camel case is used
// let - cannot be redeclared but can be updated
// let variables can be initialised later, block scope
// const - cannot be redeclared or updated, block scope
// var - canbe redeclared and updated, global scope
let names = "tony stark";
names = "vanshika";
console.log(names);
const PI = 3.14;
console.log(PI);
// datatypes - 
//  7 primitive data types - number, boolean, null, undefined, 
// BigInt, Symbol
// object - collection of values of different data types
const student = {
    name: "Vanshika",
    age: 19
};
// const object keys can be changed 
// access using objectname["variable_name"] or obj_name.var_name

student["age"] = student["age"]+1;
console.log(student.age);
const pen = {
    name: "Parker",
    price: 270,
    rating: 4,
    offer: 5
};
console.log(pen);
// string + number = stringnumber
