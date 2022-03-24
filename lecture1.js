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
function person(first_name,last_name){
   this.first_name = first_name;
   this.last_name = last_name;
}
//creating new instances of person object
let person1 = new person('Mukul','Latiyan');
let person2 = new person('Rahul','Avasthi');
 
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