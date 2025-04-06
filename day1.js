//? Hello world...
// var x = 'hello';
// console.log(x.match(/^[a-zA-Z]+$/
// ))

// const regex = /^[a-zA-Z]+$/;
// console.log(regex.test("Hello  World"))

// reverse a string 
//console.log("hello world".split('').reverse().join(''))
// function splitString(str) {
//     let reverseStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverseStr += str[i];
//         //console.log(reverseStr);
//     }
//     return reverseStr;
// }

//console.log(splitString('Gaurav')); // Output: "varuaG"

//palindrome ==> checking of string words from start to end and end to start and then matching them if we get true then string is palindrome;
// function isComplexPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
//     // Define pointers for the start and end of the string
//     let left = 0;
//     let right = cleanedStr.length - 1;
    
//     // Compare characters from both ends
//     while (left < right) {
//         if (cleanedStr[left] !== cleanedStr[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
    
//     return true;
// }

// // Example usage
// console.log(isComplexPalindrome('A man, a plan, a canal, Panama')); // true
// console.log(isComplexPalindrome('No lemon, no melon!')); // true
// console.log(isComplexPalindrome('Hello, world!')); // false


//  using of Boolean functions and truthy vs falsy questions
//console.log(Boolean(-5))

//q1 in the below code you have to do something that we log false i console??
//let num = 5;
// num = 0; // we just add or redefine our num value to 0 so that it makes console false..
// const bool = Boolean(num);
// console.log(bool);


//q2 => What will be the output?
// let isTrue = true;
// console.log(isTrue);

//q3 => What will be the output?
// let isFalse = false;
// console.log(isFalse);


//! operators in js
// in js we have multiple type of operators like:
// comparison opr. == or  === , != , !== , >,<, <=, >=,
// assignment opr. =
// logical opr. and or nor not 
// and more 

//? important baatyaad rakhna always {== ke liye !=} (equal to and not equal to ) {=== ke liye !==} ok use hota hai 

//q5 Guess the outputs?
console.log(true == "true") // false 
console.log(2 == 2) //true
console.log(2 == "2") //true
console.log(true == "true") //false
console.log(Number("true")) // NaN
console.log(Number(true)) // 1
console.log(1 == NaN) //false

//q6 Guess the outputs?
console.log(null == null); // true
console.log(null === undefined); //false
console.log(3 === "3") // false
console.log(null == undefined); // true?
console.log(null === undefined); // false?

console.log(true == 1); // true?
console.log(true === 1); // false?
console.log(false == 0); // true?
console.log(false === 0); // false?

// Objects and Primitives
console.log({} == {}); // false?
//console.log({} === {}); // false?
console.log([] == []); // false?
//console.log([] === []); // false?
console.log([] == ''); //? true?
//console.log([] === ''); // Output?
console.log([1] == '1'); // true?
//console.log([1] === '1'); // Output?

//Special Values (NaN and Infinity)
console.log(NaN == NaN); // false?
console.log(NaN === NaN); // false?
console.log(Infinity == Infinity); // true?
console.log(Infinity === Infinity); // true?
console.log(NaN == false) // false
// ? ** Baat NaN hi ek esi falty value hai jiska comaprison khud se ya kisi bhi value se krrege to always false ata hai but hm sirf isko khud se comapre kare vo bhi special case Object.is(NaN,NaN) krke to true dega bs .
console.log(Object.is(NaN,NaN)) // true

console.log(null == 0); // false
console.log(null === 0); // false

// implicit typeconversion
console.log(' ' == 0); // true
console.log(' ' === 0); // false
console.log([] == false); //? true?

// object comaprison
let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false

// date comapriosn
let date1 = new Date('2021-01-01');
let date2 = new Date('2021-01-01');
console.log(date1 == date2); // false  // here not only value chekc but here is object chekc means {} == {} not eqaual as we know
console.log(date1 === date2); // false
console.log(date1.getTime() == date2.getTime()); // true // here come same value in both cases
console.log(date1.getTime() === date2.getTime()); // true
console.log(date1.getTime())
console.log(date2.getTime())

//function comparison
let func1 = function() { return 1; };
let func2 = function() { return 1; };
console.log(func1 == func2); // false
console.log(func1 === func2); // false


// type coercion with object and string
console.log({} == '[object Object]'); // true
//console.log({} === '[object Object]'); // false


//Type Coercion with Object and Number
console.log({} == 0); // true
//console.log({} === 0); // false


// conclusion
console.log({} == ''); //false
console.log([] == ''); //True
console.log(false == ""); // true
console.log(null == undefined) // true
console.log(null == null) // true
console.log({} == 0) // false
console.log([] == 0) // true
console.log(Object.is(NaN, NaN)) // true
console.log({} == {}) // false