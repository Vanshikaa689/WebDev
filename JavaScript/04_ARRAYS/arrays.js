console.log("hello");
// arrays
let arr = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let el of arr){
    sum = sum+el;
}
let avg = sum/arr.length;
console.log(avg);

let p = [250, 645, 300, 900, 50];
for(let i = 0; i<p.length; i++){
    p[i] = (90*p[i])/100;
    console.log(p[i]);
}
// array methods
// push() - add to end
// pop() - delete from end and return
// toString() = converts array to string
// concat - joins multiple arrays and returns result - arr1.concat(arr2)
// unshift - adds element to the start of array
// shift - deletes element from the start 
// slice(start_ind, end_ind) - returns a piece of th array - doesnt change original array 
// splice(start_ind, del_count, newele1...) - changes original array(add, remove, replace)

let arr1 = [1, 2, 3, 4, 5, 6, 7];
// arr1.splice(2, 2, 101, 102);

// to add an element only
arr1.splice(2, 0 , 101);
// to delete an element only
arr1.splice(2, 1);
// second number tells how many items to delete
// to replace an element 
arr1.splice(2, 1, 101);



