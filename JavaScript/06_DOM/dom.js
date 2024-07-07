//readability, modularity, browser caching 
// console.log("hello");
//html ko javascript ke andar access karne ka tareeka
//window object - represents an open window in browser
// It is browser's object not javascript's and is automatically 
//created by the browser 
// It is a global object with lots of properties and methods
//document is an object in window which has the html code
//console.log - prints document - html code
//console.dir - prints object
// every node in the dom tree is an object 
// console.dir(window.document);
// console.dir(document.body);
// console.log(document.body.childNodes[1]); 
// prints first child of body
// through javascript we can make dynamic changes on the page
// makes the page interactive

// access elements by id --
// id is unique for each element
// represented as #
// let head = document.getElementById("heading");
// console.log(head);
// console.dir(head);

// access elements by class --
// class - multiple elements ko same caegory mein daalne ke liye
// represented by .
// returns an html collection(like arrays)
// let headings = document.getElementsByClassName("myClass")
// console.log(headings);
// console.dir(headings);

// access elements by tag --
// let para = document.getElementsByTagName("p");
// console.dir(para);

// query selector
// let firstElement = document.querySelector("p");
// tag se matching first element is returned 
// console.dir(firstElement);

// let allelements = document.querySelectorAll(".myclass");
// console.dir(allelements);

// properties 
// 1.tagName: returns tag for element nodes
// console.log(firstElement.tagName);

// 2.innerText: returns the text context of the element and all its children
// DOM TREE
// text nodes, comment, elements
// parent child siblings
// first child, last child
// let div = document.querySelector("div");
// console.dir(div);
// console.log(div.innerHTML);
// prints tags and text

// 3.innerHTML: returns the plain text or HTML contents in the element
// console.log(div.innerText);
// prints only text
// let heading = document.querySelector("h1");

// 4.textContext: returns textual content even for hidden elements 

// questions
// let h1 = document.querySelector("h1");
// console.log(h1);

// h1.innerText = "I am learning " + h1.innerText;
// console.log(h1);

// let divs = document.querySelectorAll(".box");
// console.log(divs);
// let i = 1;
// for(let el of divs){
//     el.innerText = `New unique value ${i}`;
//     i++;
// }