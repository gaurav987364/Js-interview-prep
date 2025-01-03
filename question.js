"use strict";
let x;
x = 20;
console.log(x);
//q1:: get the nth element of a (array)
// qrite a function that take array a and n as element argument?
const getNthElement = (arr, n) => {
    if (n < 1 || n > arr.length) {
        return undefined;
    }
    return arr[n - 1];
};
// console.log(getNthElement([1, 2, 3, 4, 5], 3));
// console.log(getNthElement([10, 9, 8, 7, 6], 5));
// console.log(getNthElement([7, 2, 1, 6, 3], 1));
//q2: count the array elemets?
const countArrayElements = (arr) => {
    return arr.length;
};
//q3 get last 3 character of nth elememnt of the string ?writea function that take string as argument and return last 3 characters ?
function getLast3Character(str) {
    return str.slice(-3);
}
//q4
// Write a function that takes a string as argument
// Create an object that has a property with key 'key' and a value equal to the string
// Return the object
function xyz(str) {
    return { key: str };
}
;
xyz('gaurav');
//q5
// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
function getFirst3Char(arr) {
    return arr.slice(0, 3);
}
//console.log(getFirst3Char([1,2,3,4,5,6,]))
console.log(getFirst3Char(["hi", "ok", "hello", "op", " og"]));



// gesuss the ouput
let count = 10;
function updateCount() {
    let count = 5;
    count++;
    console.log(count)
};
updateCount();
console.log(count);



//? ola interview question senario based html+js
//* you have one button which have one onClick function name detect(event) and we pass one event to it and we are simply make this function in our js code.

// Now it is our task to detect the click by user or any browser scripts
//document.querySelector("button#detect").click();
// so we simple do like this
function detect(event) {
    if(event.isTrusted){
        console.log('clicked by user');
    } else{
        console.log('clicked by browser script');
    }
};



//! Webvio interview question / 2nd jan;

// All About JWT; (localStorage,session,cookies); Where we store , what happend on reload,  safty majors about session and cookies etc ;

// Q: What is Temporal dead Zone in js;
//? Ans: TDZ: (Temporal dead zone) it is the concept in js that related to the hoisting of variable and with the visibility of the variable declared with let and Const in TDZ the variable is exits but it cannot be accessed until it is not declared. This prevents the variable from being accessed before initialization;
// eg:
// console.log(X,"give reference error.");
let X; // it is in the TDZ until we assign any value to it;
X = 10;

// Q: difference between Normal function and Anonymous function;
//? Ans: Normal function is the name function or just the fucntion declaration; and anonymous function is the function without name for example function expression or arrow fnctions; they are anonymous functions;
//Normal function
function xyz(){};
//Anonymous function
const abc = ()=>{}; const abcd = function(){};



// Q: How we handel Authentication in React.js;
//? Ans: Authentication handel in react js application involves multiple stpes:
// 1.) setup your backend Api by ensuring api is ready to handel request like (login, signup, token verification etc)
// 2.) Create authentication context for manage state globally
// 3.) making protected routes;
// 4.) making login & sign-up components;
// 5.) implement routing to navigate b/w pages using react-router-dom


//! Q: What is real life example of closures; 

//?problems with React class components;
// 1.) copy pasting of state variable;
// 2.) super(props)
// 3.) this value is differnt in defining the function like normal or arrow functions so we have to write extra binding for that so extra code bhi likhna pdta thaaaa..
//4.) Over use of lifecycle methods;

//? problem statement : 
// In react class component we make one counter , in which we simply render count value ,  makw one function to set count state value and we make on button in which on click we simpley render alert in which we show current count value at that time after 4-5 seconds of delay; so we got exact values in class component

// But but but in function components it not working correctly  means counter works properly but in alter we always get 1; 
//* Ans: we set the alert in settmeout in useeffct so render call function and settimeout is sechdule because no dependency array is given;
 
//? closure : 
// 1. is not single thing , it is phenomenon;
// 2.  when inner function acces variables from its parent function,  it creates a closure function;
// 3. Not every function is creates a closure function;

//? some points : closure is not related to the function call; kyuki function call is related to the execution phase; but closure is created beofre it; (phle hi ban chuka hota hai);

// Visualisation
var js = "JS";
let React = "React";
const Ts = "Ts";
function showPropertyDetails(){
    console.log(js);
    console.log(React);
    console.log(Ts);
};
// before call function we check for properties/closure
console.log(showPropertyDetails); // we get body of function
console.dir(showPropertyDetails); // we get our function as object in which we get 2 scopes 1. script and 2. global 
//! this above function is not making any closure ok

function  printThings(){
    function innerfunc(){ //? this another function access values from outside scope; Q: is it making closure : No.
        console.log(js);
        console.log(React);
        console.log(Ts);
    }
    console.dir(innerfunc); // we get 2 scopes so no closure making
}; //? so not evry function making closure;✅

function makeClosure(){
    let nextjs = "NextJS";
    function inner(){
        console.log(nextjs)
    }
    console.dir(inner); // we get 3rd scope Closure access values from parent
}
makeClosure();

// closure is created in compilation phase which related to js execution context ; hoisting bhi usi vjah se hoti hai btw;


//* Closure Elimination
//* Closure Preservation : if any function can acces the value from parent means it creates closure but if we have or other functin on same level but they not acces that parnt variable but closure for that is also created by js Engine which is not good

function People(){
    let names = "Gaurav";
    function getPerson(){};
    function getName(){
        console.log(names);
    };
    function getAge(){};
    return [getAge,getName,getPerson];
};
const [getAge,getName,getPerson] = People();
console.dir(getAge);
console.dir(getName);
console.dir(getPerson); //! we get closure for every function although we not acces parent variables;

// why we use closure
// 1. data hiding
// 2. private variables



//Q: render vs re-render in react js;
// they are just a function call not related to update ui; ui updaion work using reconciliation and diffing algo.
// render means call function first time
// re-render means call function again and again;




// Q: Call bind and Apply in js in depth; 
// Ans: These are the methods available to all the function and these are used for setting the value of this(global) context in js;

//call function.call(objname,args)
var objt = {name:"gaurav"};
function sayHii(age){
   return console.log(this.name + age)
};
console.log(sayHii.call(objt,24));

//apply it take obj + [list of arguments in form of array];
function getInfo(age,proff){
    return console.log("Hello name is" + " " + this.name + " " + age + " " + proff)
}
console.log(getInfo.apply(objt,[24,"react.js Dev"]));

//bind ,it return a new function. it take obj + args and returns new function with this set to obj;
//bind method
// Yeh method call aur apply se thoda different hai kyunki yeh function ka ek naya copy create karta hai with given this context aur specified arguments. Function immediately execute nahi hota balki naya function return hota hai jo baad mein execute ho sakta hai.


const bindFunc = getInfo.bind(objt);
console.log(bindFunc)// we get function body ;
console.log(bindFunc(24,"Hero"))