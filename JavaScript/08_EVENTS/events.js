console.log("hello");
// event handling in js
// 3 types - inline, in js using event handlers and in js using event listeners
// node.event = ()=>{
    // handle here
// }
let btn1 = document.getElementById("btn1");
// btn1.onclick = (evt) =>
//     {
//         console.log(evt);
//         console.log(evt.type);
//         console.log(evt.target);
//         console.log(evt.clientX, evt.clientY);
//         console.log("btn1 was clicked");
//         let a = 25;
//         a++;
//         console.log(a);
//     }
// let div1 = document.getElementById("div1");
// div1.onmouseover =()=>{
//     console.log("you are inside div");
// }
// if event is handled in both html(inline handling) and javascript
// the javascript handling is given more preference.
// handling the same event twice will overwrite the previous handling


// event object 
// it is a special object that has all the details about the event 
// all event handlers have access to the event's object properties and methods

// event Listeners - lsitens for events - and waits for them to occur
// node.addeventListeners(event, callBack)
// node.rremoveEventListeners(event, callBack)`
// callback(event handler) is a function that goes in another function as an argument
// as soon as event occurs callback is executed
// btn1.addEventListener("click", (evt)=>{
//     console.log("button was clicked - handler 1");
//     console.log(evt);
// });

// const handler2 =  ()=>{
//     console.log("button was clicked - handler2");
// };
// btn1.removeEventListener("click", handler2);
// create a toggle button - dark and light mode
let modeBtn = document.querySelector("#mode");
let currmode = "light";
let body = document.querySelector("body");
modeBtn.addEventListener("click", ()=>{
    console.log("you are trying to change mode");
    if(currmode === "light"){
        // {   document.querySelector("body").style.backgroundColor = "black";
            body.classList.add("dark");
            body.classList.remove("light");       
            currmode ="dark"
        }
        
    else{
        // document.querySelector("body").style.backgroundColor = "white";
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");   
    }
    console.log(currmode);
})
