// let div = document.querySelector("div");
// console.log(div);
// // getAtrribute() - to access value of attribute--
// let id = div.getAttribute("id");
// console.log(id);

// // setAttribute() - to change value of attribute--
// let para = document.querySelector("p");
// console.log(para.setAttribute("para", "123"));

// // access style of elements--
// let di= document.querySelector("div");
// di.style.backgroundColor = "orange";
// di.style.fontSize = "26px";
// di.innerText = "Hello";
// // div.style.visibility = "hidden";

// // insert elements--
// // create, add

// // insert in the end of an element
// let newBtn = document.createElement("button");
// newBtn.innerText = "Hello";
// console.log(newBtn);

// let div1 = document.querySelector("div");
// div1.append(newBtn);

// // insert in the beginning of an element
// div1.prepend(newBtn);

// // adds before the node(outside)
// div1.before(newBtn);

// // adds after the node(outside)
// div1.after(newBtn);

// let heading = document.createElement("h1");
// heading.innerHTML = "<i>i am js</i>";
// document.querySelector("body").prepend(heading);

// // deLete an element 
// let p = document.querySelector("p")
// p.remove();

// appendChild, removeChild

// practice questions
let btn = document.createElement("button");
btn.innerText = "click me";
console.log(btn);
btn.style.backgroundColor = "red";
btn.style.color = "white";
document.querySelector("body").prepend(btn);


// adding a new class to an element from javascript
let para = document.querySelector("p");
// dont use para.setAttribute("content", "newClass");
para.classList.add("newClass");