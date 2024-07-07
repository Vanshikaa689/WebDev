console.log("hello")
// LOOPS
// for loop
for(let i = 1; i<=5; i++)
    {
        console.log("Vanshika");
    }
// i cannot be accessed outside for loop

// while loop
let i = 1;
while(i<=5)
    {
        console.log(i);
        i++;
    }

// do while loop - runs atleast once 
i = 20;
do{
    console.log(i);
    i++
}while(i<=10);

// for of loop - strings and arrays
let str = "vanshika";
let len = 0;
for(let i of str)
    {
        console.log(i);
        len++;
    }
console.log(len);
//for in loop - objects, returns the keys
let student = {
    name: "Vanshika",
    age: 19,
    place: "Patiala"
};
for(let i in student)
    {
        console.log(i, student[i]);
    }

// print all even numbers from 0 to 100
for(let i = 0; i<=100; i++)
    {
        if(i%2==0)
            {
                console.log(i);
            }
    }
// guess the number game
// let num = 16;
// let a;
// do{
//     a = prompt("Guess the number");
//     // prompt gives numbers in the form of string so we cant use 1== here
//     if(num==a)
//         {
//             console.log("You guessed the number correctly");
//             break;
//         }
//     else{
//         a = prompt("Guess the number again");
//     }
// }while(num!=a);

// STRINGS
let str1 = "vanshika";//double quotes
let str2 = 'vaibhav';//single quotes

// str.length - prints string length 
//access indices - string[index]
console.log(str1[2]);

// template literals 
let obj = {
    item: "pen",
    price: 10
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// numbers converted to strings
console.log(output);

// escape characters 
console.log("Vans\nhika");
let s = "Vans\nhika";
console.log(s.length);

//method is a block of code jo strings par kaam karke deta hai
// doesnt change original string returns a new string

let t = "  vanshika  ";
t = t.toUpperCase();
console.log(t);
t = t.trim();
console.log(t);
console.log(t.slice(1, 3));
a = "vaibhav";
r = t.concat(a);
console.log(r);
let res = a+  "is from up and" + t + "is from delhi";
console.log(res);
let str3 = "hellololo";
console.log(str3.replaceAll("lo", "bo"));
str3 = "ilovejavascript";
console.log(str3.charAt(3));
// strings are immutable

let name = prompt("Enter your full name without any spaces in between");
a = name.trim();
b = name.length;
let username = "@" + a + b;
console.log(username);
