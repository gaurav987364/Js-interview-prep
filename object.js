const myObj = {
    name: 'gaurav',
    age:24,
    sex:'male',
    hobby : {
        name:'reading',
        time:'morning'
    },
    address:{
        street:'123 Main St',
        city:'New York',
        state:'NY'
    }
}

console.log(Object.keys(myObj)) // give array of keys of objects
console.log(JSON.stringify(myObj))


// creating obj using new keyword

let person = new Object();
person.name = 'John Doe';
person.age = 30;
person.city = 'New York';
console.log(person);

//? we can acces object property by two ways .notation and obj["prop name"];


console.log(person.hasOwnProperty('name')) // return true if property exists in objject

// primitive and non primitive properties
// string, number, boolean, undefined, bigint,etc all are primitives and primitive hiiiii immutable hote haii 
// arrays , objects, function are non primitive and these are mutable

//let pi = 3.14;
//pi = 2.14; // this wrong becz pi is constenat and always make contants with const


// delete obj properties
console.log(delete person.age);

// nested objects
person.myCars =  {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
}
console.log(person);
// now we also acces nested obj
person.myCars.car2;


// coding interview question on objects
//q1 prevent user to change or overwrite and object properties like particular property in obj. ?

const objToPrvents = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    }
};

Object.freeze(objToPrvents); //Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
//console.log(Object.isFrozen(objToPrvents))

Object.seal(objToPrvents); // pvents add or delete property ob obj.
objToPrvents.newprop = "gauarav";
console.log(objToPrvents, Object.isSealed(objToPrvents)) // true

console.log(Object.entries(myObj)) // return the array of kvp(key value pairs)
console.log(Object.keys(myObj)) // return the keys arry
console.log(Object.values(myObj)) // return array of values

// method of creating objects using constructor
// constructor function
function Obj(name,age,sex,){
    this.name = name;
    this.age = age;
    this.sex = sex;
}
const p1 = new Obj('rohan',21,'male')
console.log(p1);

//  prevent user to modidfy some field only
let myObject = {
    name: "Gaurav",
    pancardNumber: "PNR001DC02",
    age: 23,
    bio: "A normal guy with extra inches",
};
    
Object.defineProperty(myObject, 'pancardNumber', {
value: myObject.pancardNumber,
writable: false,
});

//class constructor
class CreateObj {
    constructor(name,age,sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}
CreateObj.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
}
//Prototype ka use karke hum objects ke methods aur properties share kar sakte hain bina baar-baar method define kiye. Prototype ka use OOP aur inheritance ko achieve karne ke liye kiya jata hai.

// Example with Prototype: above dekho
// Agar hum chahte hain ki greet function har object ke liye alag se define na ho, toh hum prototype ka use kar sakte hain:


const p2 = new CreateObj('gaurav',24,'male');
p2.greet()
console.log(p2);

// assign method of object
let newObj1 = {a:1,B:2};
let newObj2 = {};
Object.assign(newObj2, newObj1)
console.log(newObj2);



// prototype ke bare me sab kuch 
//! YAAD RAKHO HAR OBJECT K PASS USKA EK PROTTOTYPE DEFAULT HOTA HAI;
//? prototype chaining ;
//Answer:>  JavaScript mein agar ek property ya method kisi object mein directly nahi milti, toh wo object apne prototype mein search karta hai. Isi concept ko Prototype Chaining kehte hain. Yeh chain tab tak chalti hai jab tak property mil nahi jati ya chain null tak nahi pahunch jati.


// Adding a Method to a Constructor
//? You cannot add a new method to an object constructor function.

// This code will produce a TypeError:

// Example
// Person.changeName = function (name) {
//   this.lastName = name;
// }

//myMother.changeName("Doe");
//!  TypeError: myMother.changeName is not a function

// Adding a new method must be done to the constructor function prototype:

// Example
// Person.prototype.changeName = function (name) {
//   this.lastName = name;
// }

//myMother.changeName("Doe");



// built in js construtor functions
//new Object()   // A new Object object
//new Array()    // A new Array object
//new Map()      // A new Map object
//new Set()      // A new Set object
//new Date()     // A new Date object
//new RegExp()   // A new RegExp object
//new Function() // A new Function object


// interview question what is proptotypal inheritance?
// ans:> getting the property from parent objects .
// Base object
// const person = {
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// Create a new object that inherits from person
// const student = Object.create(person);
// student.name = 'Gaurav';
// student.study = function() {
//     console.log(`${this.name} is studying.`);
// };

// Create another object that inherits from person
// const teacher = Object.create(person);
// teacher.name = 'Mrs. Sharma';
// teacher.teach = function() {
//     console.log(`${this.name} is teaching.`);
// };

// Using the inherited method
//student.greet();  // Output: Hello, my name is Gaurav
//student.study();  // Output: Gaurav is studying

//teacher.greet();  // Output: Hello, my name is Mrs. Sharma
//teacher.teach();  // Output: Mrs. Sharma is teaching



// search method
let str = "hi there you are good";
console.log(str.search("are")) // 13 basiclay search index and if not exixts retrun -1 like index of and lastindexof


const obj = {
    name: "John",
    age: 25,
    city: "New York"
}
console.log(JSON.parse(JSON.stringify(obj))); // this deep copy 
// shawlow copy is just taking refrences

obj.name = "harry"
console.log(obj);