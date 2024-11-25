// apart from everything it coding question
// var a = 1;
// console.log(a++);
// console.log(a);

// var b = 2;
// console.log(++b);
// console.log(b);
//! when we declare variabl with var its wroking otput is 1,2,3,3;
// let a = 1;
// console.log(a++);
// console.log(a);

// let b = 2;
// console.log(++b);
// console.log(b);
//? when we declare same thing wth let and const it give this below error code
//! VM362:1 Uncaught SyntaxError: Identifier 'a' has already been declared




//*hoisting in js;
//!Basic Concept of Hoisting
//? Hoisting ek mechanism hai jisme JavaScript function declarations aur variable declarations ko unke scope ke top par move kar deta hai (hoist kar deta hai) runtime se pehle. Matlab, aapke function aur variable declarations ko uske scope ke sabse upar le jata hai chahe woh code mein kahin bhi declared ho.

//!Function Hoisting
//?Function declarations poore code ke execution se pehle hoist ho jaate hain. Matlab, aap function ko uske declaration se pehle call kar sakte hain.

// Function declaration
console.log(greet()); // Output: Hello, world!
function greet() {
    return "Hello, world!";
};
//*Yeh example show karta hai ki function greet ko call karne se pehle declare kiya gaya hai, lekin function call pehle kiya ja sakta hai kyunki function declaration hoisted hoti hai.


//!Variable Hoisting
//?Variables declared with var are hoisted but initialized with undefined. Variables declared with let and const are hoisted but not initialized. They remain in a "{temporal dead zone}" until the declaration is encountered.

// variable expression also
// so my var = undefined, se initialize so it giveundef and output
console.log(myVar); // Output: undefined
var myVar = "Hello";
console.log(myVar); // Output: Hello


console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = "Hello";

console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
const myConst = "Hello";

// explanation of avobe snippets
//?var: Variable declaration hoisted hoti hai aur initial value undefined hoti hai.

//?let aur const: Declaration hoisted hoti hai lekin initialization nahi hoti, aur temporal dead zone mein hoti hai till the point of declaration.


//! sabse phle is concept ko yaad rkhnaa ok
//Function declaration
function foo() { return 5; }

//Anonymous function expression
var foo = function() { return 5; }

//Named function expression
var foo = function foo() { return 5; }


// Function expression and hoisting;;


console.log(abc()); // TypeError: abc is not a function
var abc = function() {
    return "Hello";
};
console.log(abc()); // Output: Hello

//* jab ye code rn hua hoga tab var abc; // undefined ke sath chal gya isliye error aya upar log me and niche data idhar function hoit nhi hua only variable


// Explanation:
// Function expression ko hoist nahi kiya jaata, isliye abc pehli call mein undefined hota hai aur function call nahi kar sakta.



//!. Hoisting with Block Scopes
//Block scopes let aur const ke sath kaise kaam karti hain.
{
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 10;
}

{
    console.log(y); // ReferenceError: Cannot access 'y' before initialization
    const y = 20;
}

// it is hoisted;
{
    console.log("ok",a);
    var a = 4;
}



//! hoisting inside functions
function doSomething() {
    console.log(x); // undefined
    var x = 100;
    console.log(x); // 100
}
doSomething();


//Predict the output
console.log(a); // ? undefined
var a = 5;
console.log(a); // ? 5


hello(); // ? hi there
function hello() {
    console.log("Hi there!");
}
hello(); // ? hi there


console.log(b); // ? cannot acces before initialization;
let b = 10;


hoistMe(); // ? hoistme is not function
var hoistMe = function() {
    console.log("Hoisted function");
};
hoistMe(); // ? not run due to error



function example() {
    console.log(c); // ? undefined
    var c = 20;
    console.log(c); // ? 20
}
example();



{
    console.log(d); // ? cannot acces d before inicilization
    let d = 30;
}



function outer() {
    inner();
    var inner = function() {
        console.log("Inner function");
    }
    inner();
}
outer();

//? it is a fucntion expression so that var inner is hoisted and initiliaze with undefined thats whsy output is inner is not function

function outerFunction() {
    console.log(e); // ? undefined
    if (false) {
        var e = "I'm inside if!";
    }
    console.log(e); // ? undefined
}
outerFunction();

//! it works as that abover explanation
function outerFunction() {
    var e; // Declaration hoisted to the top
    console.log(e); // undefined
    if (false) {
        e = "I'm inside if!";
    }
    console.log(e); // undefined
}



function outerFunction() {
    console.log(e); 
    if (true) { // if this is true
        var e = "I'm inside if!";
    }
    console.log(e); 
}
outerFunction()
// undefined
// I'm inside if!




abc();
var abc = function(){
    console.log("Hello");
}
abc();
function abc(){
    console.log("World");
};
abc();
function abc(){
    console.log("JavaScript");
}
abc();


// for running this output is ;
//javascript
//hello
//hello
///heloo





//! Js event Loop;

//?Q1 javascript is single threaded - synchronous language and dynamically typed lang. bu it has capablity to handel asyncchoruns tasks using callbacks, async/await, promisies.

//* javascript execution context ;
//? Global execution context (this);
//! memory creation phase => isme sirf variable, function or code ki copy banti hai execute nhi hoti
//! execution phase ==> isme vo copy execute hone ke liye atui hai or ye banati hai ek box jisme hota hai new Enviourment variable + thread jo dubara se in two pahse ko create krte hai memory and execution phaese fir execution se return hokar chije jati hai global execution context pe and vo box delete hojata hai and this cycle runfor every function call();
//? function execution context
//? eval execution context

//* let understand with the example
let value1 = 10;
let value2 = 5;
function addSum(val1, val2){
    let total = val1 + val2;
    return total;
}
let result1 = addSum(value1, value2);
let result2 = addSum(30,60);

// in above code step by step chije smajho::

// * sbasbe phle banega global execution context (this); code snippt isme ayga ;
// * ab banega memory allocation/creation phase --> is phase me simply code ka sirf clone banega code execute anhi hoga like : ⬇️
// let value1 = undefined;
// let value2 = undefined;
// addSum = function(){ //only body of function
//     let total = undefined;
//     return total;
// }

// * ab clone ke baad code execution phase me ayga jisme ek box create hoga jisme hogi 2 chije [new envioument variable + thread];

// * ye 2 chije milkar ab same chij ko repeat kregi of creation memory phase and execution phase ⬇️

// * ab execution phase me chala hai jisme chal rhega ki addSum function call hoga and value1, value2 ko pass krega and total ko return hoga total;

// * ye total return hokar jayga sedha upar global execution context ke pass and hamara box delete hojyga , fir again result2 ke liye dubara same process hogi;


//! lets understand call stack, other things

//? => Event Loop - It is a single-threaded model that handles asynchronous tasks. It works by having a queue of tasks and a call stack.

//! ham call stack ka working dekh sakte hai console.log me source me jao or udhar snippet banao and fir run and execute krke dekho by adding break points;
// by making this example
function one(){
    console.log("one")
}
function two(){
    console.log("two")
}
function three(){
    console.log("three")
}
one();
two();
three();

//? output will be : one two three is snippet ko console source me dekho call stack ka working behavoiur then fir thoda complex example dekho for under standing LIFO principal by this snippet
function foo() {
    console.log('foo');
}
function bar() {
    foo();
    console.log('bar');
}
bar();
// bar -> foo -> console.log('foo') -> foo finishes -> console.log('bar') -> bar finishes


//call stack works on LIFO(last in first out principal)
//? jo phle aya bo last me jayga or last wala sabse phle jayga