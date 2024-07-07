// a javascript object is an entity having state and behavior(properties and methods)
const student = {
    fullname: "vanshika ganjoo",
    marks: 94.4,
    printmarks: function(){
        console.log("marks =", this.marks);
    }
};
// protoype is a reference to an object 
// js objects have a special property called prototype
// it is an objec with proerties of it's own that every other object in js inherits
//  we can make prototypes of our own 
const employee ={
    calcTax() {
        console.log("tax rate is 10%");
    },
};
const karan = {
    salary: 50000,
}
// if we want methods of student to come in karan 
// obj2.prototype = object1
karan.__proto__ = employee;
// if object and it's prototype have same method then object's method is used

// classes in js
// classes give a template to make an object
// those objects will have some state(variables) and some behaviour(functions) inside it
class Car{
    constructor(brand){
        console.log("creating new object");
        this.brand = brand;
    }
    start(){
        console.log("start");
    }
    stop()
    {
        console.log("stop");
    }
    // setBrand(brand){
    //     this.brandname = brand;
        // this means object jiske liye function call ho raha hai
}
let fortuner = new Car("fortuner");
let lexus = new Car("lexus");
// fortuner.setBrand("fortuner");

// bank ke liye software - class to store employee data 

// constructor-
// automatically invoked by new 
// initialises object

// inheritance - passing down properties and methods from parent to child class
// if child and parent have same method - child's method will be used - method overriding 

class Parent{
    hello()
    {
        console.log("im in parent");
    }
}
class Child extends Parent{
    hello(){
        console.log("im in child");
    }
}
let obj = new Child();

// super keeyword
// used to call the constructor of its parent class to access 
//  the parent's properties and methods, to pass child's imp info to parent's constructor 




// practice questions -- 
let data = "you are viewing data";
class User{
    constructor(name, email)
    {
    this.name = name;
    this.email = email;
    }
    viewData(){
        console.log("data = ", data);
    }
}
let student1 = new User("vanshika", "vanshiganjoo");
let student2 = new User("vaibhav", "vverma");


class Admin extends User{
    constructor(name, email)
    {
        super(name, email);
    }
    editData(){
        data = "some new value";
        console.log(data);
    }
}
let admin1 = new Admin("ad", "ad@gmail.com");
let a = 12; 
let b = 13;
try{
    console.log("a+b=", a+c);
}catch(err){
    console.log(err);
}
// err - error object - special argument
// error handling - try catch blocks 
