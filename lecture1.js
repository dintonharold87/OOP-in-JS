/* 1. Object– An Object is a unique entity that contains property and methods. For example “car” is a real life Object, which has some characteristics like color, type, model, horsepower and performs certain action like drive. The characteristics of an Object are called as Property, in Object-Oriented Programming and the actions are called methods. An Object is an instance of a class. Objects are everywhere in JavaScript almost every element is an Object whether it is a function, array, and string. 
 */

// Using an Object Literal 
//Defining object
let person = {
    first_name:'Mukul',
    last_name: 'Latiyan',
 
    //method
    getFunction : function(){
        return (`The name of the person is
          ${person.first_name} ${person.last_name}`)
    },
    //object within object
    phone_number : {
        mobile:'12345',
        landline:'6789'
    }
}
console.log(person.getFunction());
console.log(person.phone_number.landline);

// Using an Object Constructor:
//using a constructor
function person100(first_name,last_name){
   this.first_name = first_name;
   this.last_name = last_name;
}
//creating new instances of person object
let person1 = new person100('Mukul','Latiyan');
let person2 = new person100('Rahul','Avasthi');
 
console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);

// Using Object.create() method: The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

const coder = {
    isStudying : false,
    printIntroduction : function(){
        console.log(`My name is ${this.name}. Am I
          studying?: ${this.isStudying}.`)
    }
}
// Object.create() method
const me = Object.create(coder);
 
// "name" is a property set on "me", but not on "coder"
me.name = 'Mukul';

/* ###################### */
// CLASSSES
/* ###################### */

/* Classes– Classes are blueprint of an Object. A class can have many Object, because class is a template while Object are instances of the class or the concrete implementation. 
Before we move further into implementation, we should know unlike other Object Oriented Language there is no classes in JavaScript we have only Object. To be more precise, JavaScript is a prototype based object oriented language, which means it doesn’t have classes rather it define behaviors using constructor function and then reuse it using the prototype */

// Lets use ES6 classes then we will look into traditional way of defining Object and simulate them as classes.

// Defining class using es6
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker =  maker;
    this.engine = engine;
  }
  getDetails(){
      return (`The name of the bike is ${this.name}.`)
  }
}
// Making object with the help of the constructor
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
 
console.log(bike1.name);    // Hayabusa
console.log(bike2.maker);   // Kawasaki
console.log(bike1.getDetails());

/* The class syntax has two components: class declarations and class expressions.

Class declarations: */
class GFG {
    constructor(A, B, C) {
        // "this" refers to the address
        // of the keys "g" and "f"
        //Note g,f,gg are properties
        //A,B,C are values
        this.g = A;
        this.f = B;
        this.gg = C;
    }
}

/* Constructor: A constructor is a function that initializes an object. In JavaScript the constructors are more similar to normal java constructor.

Object constructor: In JavaScript, there is a special constructor function known as Object() is used to create and initialize an object. The return value of the Object() constructor is assigned to a variable. The variable contains a reference to the new object. We need an object constructor to create an object “type” that can be used multiple times without redefining the object every time. */

// creating object using "new" keyword
    var gfg = new Object();
      
    // Assigning properties to the object
    // by using dot (.) operator    
    gfg.a = "JavaScript"; 
    gfg.b = "GeeksforGeeks";
 // Creating an object using "{ }" bracket
    var gfg = { };
  
    // Assigning properties to the object 
    // by using third bracket
    gfg['a'] = "JavaScript"; 
    gfg['b']= "GeeksforGeeks";

    
// ################################
// ENCAPSULATION
// ################################
/*  Encapsulation – The process of wrapping property and function within a single unit is known as encapsulation. 
Sometimes encapsulation refers to hiding of data or data Abstraction which means representing essential features hiding the background detail. Most of the OOP languages provide access modifiers to restrict the scope of a variable, but their are no such access modifiers in JavaScript but their are certain way by which we can restrict the scope of variable within the Class/Object.  */
function person87(fname,lname){
    let firstname = fname;
    let lastname = lname;
 
    let getDetails_noaccess = function(){
        return (`First name is: ${firstname} Last
            name is: ${lastname}`);
    }
 
    this.getDetails_access = function(){
        return (`First name is: ${firstname}, Last
            name is: ${lastname}`);
    }
}
let person99 = new person87('Mukul','Latiyan');
console.log(person99.firstname);
console.log(person99.getDetails_noaccess);
console.log(person99.getDetails_access());
/* In the above example we try to access some property(person1.firstname) and functions(person1.getDetails_noaccess) but it returns undefine while their is a method which we can access from the person object(person1.getDetails_access()), by changing the way to define a function we can restrict its scope. */



// ###############
// INHERITANCE
// ###############

/* Inheritance – It is a concept in which some property and methods of an Object is being used by another Object. Unlike most of the OOP languages where classes inherit classes, JavaScript Object inherits Object i.e. certain features (property and methods)of one object can be reused by other Objects.  */

class person69{
    constructor(name){
        this.name = name;
    }
    //method to return the string
    toString(){
        return (`Name of person: ${this.name}`);
    }
}
class student extends person69{
    constructor(name,id){
        //super keyword to for calling above class constructor
        super(name);
        this.id = id;
    }
    toString(){
        return (`${super.toString()},Student ID: ${this.id}`);
    }
}
let student1 = new student('Mukul',22);
console.log(student1.toString());