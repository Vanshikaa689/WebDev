console.log("hello");
// ---------------------------
// operators
//arithmetic operators 
// +, -, *, /, %, **
let a = 5;
let b = 2;
console.log("a = ", a, "& b = ", b);
console.log("a + b = ", a+b);

// unary operator - ++, --
// ++a - pre increment , a++ - post increment
a++;
console.log(a);

// assignment operators
// =, +=, -=, *=, %=, **=
console.log(a+=4);

// comparison operators
// ==, ===, !=, !==, <=, >=, <, >
// ===, !== checks value and type
console.log(a==b);

// logical operators
//  &&, ||, !
console.log(!a==b);

// ---------------------------------------
// conditional statements
// if else
let mode = "blue";
let color = "dark";
if(mode=="dark")
    {
        color = "black";
    }
    else if(mode == "blue")
    {
        color = "blue";
    }
    else
    {
        color = "white";
    }
    console.log(color);

// ternary operator
let age = 18;
age>=18?console.log("eligible"):console.log("not eleigible");


// switch statement
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

// alert - one time popup
// prompt - takes user input 

let num = prompt("Enter a number");
if(num%5 === 0)
    {
        console.log("Multiple of 5");
    }
    else{
        console.log("Not a multiple of 5");
    }

