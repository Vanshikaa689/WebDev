console.log("hello")
// FUNCTIONS
function myFunc(){
    console.log("Welcome");
}
myFunc();
function myFunc1(msg){
    console.log(msg);
}
myFunc1("you are the best");
function sum(x, y)
    {
        s = x+y;
        return s;
    }
console.log(sum(2, 3));

// arrow functions
// const funcName = (param1, param2)=>{
//  do some work 
// }
const sum1 = (a, b) =>{
    console.log(a+b);
}
sum1(2, 4);

let count =0;
function Vowel(str)
{
    str = str.toLowerCase();
    for(let el of str)
        {
            if(el == 'a'|| el == 'e'|| el == 'i'||el == 'o'|| el =='u')
                {
                    count++;
                }
        }
        return count;
}

console.log(Vowel("Vaibhav"));
const Vowel1 = (str)=>{
    if(el == 'a'|| el == 'e'|| el == 'i'||el == 'o'|| el =='u')
        {
            count++;
        }
        return count;
}
//for each loop - higher order function - either take another function as a parameter in them or return another function 
// functions can be passed as parameters and returned also
// a callback function is a function passed as an argument to another function
// dont need to be printed
let arr  =['apple', 'banana', 'mango'];
arr.forEach(function printVal(val){
    console.log(val);
});

arr.forEach((val, idx, arr)=>{
    console.log(val.toUpperCase(), idx, arr);
});

arr = [1, 2 ,3, 4];
arr.forEach(function square(val)
{
    val = val*val;
    console.log(val);
});

//important array methods 
// map method - creates a new array with the results of some operation
// The vakue its callback returns are used to form an array

let newarr = arr.map((val)=>{
    return val;
});
console.log(newarr);
// filter method - creates a new array of elements that give true for a condition 
let newarr1 = arr.filter((val)=>
{
    return val%2===0;
});
console.log(newarr1);
// reduce method - performs some operations and reduces the array to single value
// it returns that single value
let carr = [1, 2 , 3, 4];
let output = carr.reduce((res, currval)=>
{
    return res + currval;
});
//  res =1, cur = 2 => 1+2 = 3 stored in res 
// then currval moves forward
console.log(output);

 output = carr.reduce((res, currval)=>
    {
        return res>currval?res:currval;
    });

console.log(output);
let marks = [87, 93, 64, 99, 86];

const students = marks.filter((val)=>
{
  return val>90;
})
console.log(students);




// let n = parseInt(prompt("Enter a number"));
// let student =[];
// for(let i = 1; i<=n ;i++)
//     {
//         student[i-1] = i;
//     }
// const add = student.reduce((prev, curr)=>
// {
//     return prev + curr;
// });
// console.log(add);

// const mul = student.reduce((prev, curr)=>
//     {
//         return prev*curr;
//     });
// console.log(mul);