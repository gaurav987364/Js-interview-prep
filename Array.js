const arr = [1,2,3,4,5,6,7,8,9,10];

//genrate random color codes
console.log(`#${Math.floor((Math.random()*12777215)).toString(16)}`)


//? value method return the all values of the arry it provide an iterator which iterate over arry and give only values simply
const values = arr.values();
for(let value of values){
    console.log(value);
}

//? length method return the lenght of the array
//? toString() // gives and strings of values of array
console.log(arr.toString());

//?push() and pop() element dalna and nikalna in the arry from start and end

//? keys()  this method returns the keys of the the array not values for eg.
const keyArray = [{a:1}, {b:2}];
console.log(Object.keys(keyArray)); // ["0", "1"]

//?map()
console.log(arr.map(el => "ok"))

//? filter()
console.log(arr.filter(el => el > 5))

//?forEach()
console.log(arr.forEach((e)=>{
    console.log(e);
}));

//? shift() removes the first element of the array and returns it
console.log(arr.shift());

//? unshift() adds one or more elements to the beginning of an array and returns the new length
console.log(arr.unshift(5))
console.log(arr);

//! push and pop used for remove and add element at the end of the array mean while shift and unshift use for add and remove elemt from start of arra all of the methods are changes the length of the array.

//? reverse() used for reverse the order of the arry

//? sort() used for sort the array // by default order is ascending in js
let newArr = [10,20,30,40];
console.log(newArr.sort((a,b)=> b - a))

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 }
];
users.sort((a, b) => a.age - b.age);
console.log(users);
// [{name: "Bob", age: 20}, {name: "Alice", age: 25}, {name: "Charlie", age: 30}]


// question on sort()
// Write a function to sort an array of strings based on their lengths in ascending order.

const stringArray = ["purple", "yellow", "green", "oranged", "indigo-blue-500","red"];
console.log(stringArray.sort((a,b)=> a.length - b.length));

//Sort an array of integers such that all even numbers come before odd numbers, maintaining their relative order.
const numbArr = [2,30,7,1,40,45,66,100];
console.log(numbArr.sort((a,b)=>(a % 2) -  (b % 2)))

//! TIP: if hmae koi bhi string ka question diya hai or bola hai sort kro ya koi or arry method ka use kro to simple hame phle hme spilit krna hai kyuki string  split array deti hai fir usp hm array method laga skte hai 
// Given a string sentence, sort all the words alphabetically while preserving case sensitivity.

function sortString(sentence){
    return sentence.split(" ").sort().join(" ")
}
console.log(sortString("The quick brown fox jumps over the lazy dog")) //The brown dog fox jumps lazy over quick the

//Given an array of numbers and an integer k, return the k largest numbers in descending order.
const topKNumbers = (arr, k) => {
    // Step 1: Sort the array in descending order
    arr.sort((a, b) => b - a);
    console.log(arr.sort((a, b) => b - a))
    // Step 2: Extract the first k elements
    return arr.slice(0, k); // suppose k=3 diya to shuru ka 3 element dedo kaat kr 
};

// Example Usage
const numbers = [3,5,6,7,8,5,4,3,4,5];
const k = 3;
console.log(topKNumbers(numbers, k)); // Output: [8, 7, 6]




//? from()
const obj = {
    0: "John",
    1: 30,
    2: "New York",
    length:3
}
let newarr = Array.from(obj);
console.log(newarr); // Output: ["John",30,"New York"]

console.log(Array.from({length:4}, (_,i)=>i)) // create a new array 

//Array.from() creates arrays from array-like or iterable objects.
//Array.of() creates arrays from arguments passed to it.
Array.from('abc'); // ['a', 'b', 'c']
Array.of('abc');   // ['abc']


//? join() // join the elements of the array into strings
const items = ['g','a','u','r','a','v'];
console.log(items.join("")); // Output: gaurav


// vowel regex
console.log(items.join("").match(/[aeiou]/gi).length); // Output: 3

//? splice() // this method remove elements from the array and add new one and changes the original array

console.log(items.splice(1, 4)); //! 1 se start krke 4 element cut krake de diye hme 
// ye to hogyi remove krne ki baat // [ 'a', 'u', 'r', 'a' ]


//?? after done with  avobe operation we have our array like this ['g', 'v'];
// add ese krte hai using splice
console.log(items.splice(2,3,"x","y","z")); //! 2 index se 3 element ko addon krdo orye hai 3 element "x","y","z";
console.log(items) // [ 'g', 'v', 'x', 'y', 'z' ]

//! checking for which method is modify the original array :: so slice does not while splice does okokok;
const product = ["socks", "shirt","pent","jeans","gloves"]
console.log(product.slice(0,2));  //[ 'socks', 'shirt' ]
console.log(product);             //[ 'socks', 'shirt', 'pent', 'jeans', 'gloves' ]
console.log(product.splice(0,2)); //[ 'socks', 'shirt' ]
console.log(product);             //[ 'pent', 'jeans', 'gloves' ]


//? flat() this method gives a new array with containing all item of parent array into sorted way;
// simple the array and return the simple array from nested array ;
const nestedArray = [1,[2,[3,4,5,[6]]], 7, [8,[9]]];
console.log(nestedArray.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


//? Set(); The Set object in JavaScript is a collection of unique values. It ensures that no duplicate values are stored and provides methods to manage the collection effectively.
const set = new Set([1,2,3,3,4,5,5,5,78,8,8,8,]);
//? default me set method hame ek object deta hai by removing the duplicates from the arrray
console.log(set) // Set(7) { 1, 2, 3, 4, 5, 78, 8 }

//? if we want to convert it into we do this
console.log(Array.from(set)) // it conert object into array, [1, 2, 3, 4, 5, 78, 8]

// Basic operations on set
const mySet = new Set([1, 2, 3, 3, 4]);

console.log(mySet); // Set(4) {1, 2, 3, 4}
mySet.add(5); // Add a new element
mySet.delete(2); // Remove an element
console.log(mySet.has(3)); // Check if an element exists (true)
console.log(mySet.size); // Number of elements (4)
mySet.clear(); // it clear the set entierly
console.log(mySet) //set(0) {}
// console.log(set.entries())


// iterating over set 
//? we can iterate over set using two ways for...of loop and forEach() method
const newSet = new Set(["a", "b", "c"]);

for (let value of newSet) {
    console.log(value); // "a", "b", "c"
}

newSet.forEach(value => {
    console.log(value); // "a", "b", "c"
});


// write a function for removing duplicates from and array
function duplicate(arr){
    return [...new Set(arr)]
}
console.log(duplicate([11,22,33,33,33,44,44,55,55,66,77,77,88,88,888]))
// [
//     11, 22, 33,  44, 55,
//     66, 77, 88, 888
// ]


//coding question on Set()
// write function to find common element? in given two array
function common(arr1, arr2){
    const newarr = new Set(arr1);
    return arr2.filter(num => newarr.has(num));
}
console.log(common([1,2,3,4,5], [4,5,6,7,8])) // [4, 5]

// find common b/w two array without built-in methods
function kkk(arr1, arr2){
    let dup = [];

    for(let i=0; i<arr1.length;i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i] === arr2[j]){
                dup.push(arr1[i], arr2[j])
            }
        }
    }
    return [...new Set(dup)];
}
console.log(kkk([1,2,3,4,5], [4,5,6,7,8])) // [4, 5]


// find all unique elements b/w two array without built-in methods
function kkk(arr1, arr2){
    let dup = [];

    for(let i=0; i<arr1.length;i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i] !== arr2[j]){
                dup.push(arr1[i], arr2[j])
            }
        }
    }
    return [...new Set(dup)];
}
console.log(kkk([1,2,3,4,5], [4,5,6,7,8])) // [1,2,3,4,5,6,7,8]



//Find the Difference Between Two Arrays
//Q::=> Return elements present in the first array but not in the second.
function Difference(arr1, arr2){
    let secondArr = new Set(arr2);
    return arr1.filter(num => !secondArr.has(num));
}
console.log(Difference([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])); // [1, 2, 3]


// write a function to check array contain all unique elements?
function checkUniqueElements(arr){
    let uniqueElements = [];
    for(let i=0; i<arr.length; i++)
        if(!uniqueElements.includes(arr[i])) // suppose in that way arr[i] 
            uniqueElements.push(arr[i]);
    return uniqueElements.length === arr.length;
}
console.log(checkUniqueElements([1,2,2,3,4]));

// suppose in that way arr[i] ,phle 1 aya,  !uniqueelements.includes(arr[i]) ye condition initially true hai kyuki empty arry me 0 hai which is falsy to or hm !falsy kr rhae hai which is true to code run hua 1 aya push hua ok 2, aya push hua , 2 aya which is repeatedly means 2 reject and so on...

// find unique elements ka short method 
const areAllUnique = (arr) => new Set(arr).size === arr.length;
console.log(areAllUnique([1, 2, 3, 4])); // true
console.log(areAllUnique([1, 2, 2, 4])); // false


// Find unique chracters in string
console.log(new Set("hello"));
// without built-in methods
function uniqueChar(str){
    let unq = "";

    for (let i = 0; i < str.length; i++) {
        if(!unq.includes(str[i])){
            unq += str[i];
        }
    }
    return unq
}
console.log(uniqueChar("hello")) // hleo

//?reduce() //

const redArray = [20,30,40,50,60];
console.log(redArray.reduce((acc, cur)=> acc + cur,0))



// some talk about find, some, every method

//?some()
// Array.prototype.some()
// Purpose: Checks if at least one element in the array passes the test implemented by the provided function.

// Returns: true if at least one element passes the test; otherwise, false.
//const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some(num => num % 2 === 0);

console.log(hasEvenNumber); // Output: true (because 2 and 4 are even numbers)


//?find()
//* jis position ya elemnt pe test pass hua uske badd ka sirf ek bnda return krdega sabko nahi ok, or aagar test pass nhi hua to simple u defined dedega
const Peoples = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const user = Peoples.find(user => user.age > 30);

console.log(user); // Output: { name: 'Charlie', age: 35 }


//? Every()
// Purpose: Checks if all elements in the array pass the test implemented by the provided function.

// Returns: true if all elements pass the test; otherwise, false.


//! some vs every => SOME CHECK KREGA SAB KE UPAR ITERATE KREGA OR AGAR EK BNDA BHI TEST BY CALLBACK FUNCTION  KO PASS KIYA TO TRU DEDEGA SABKE LIYE OK NAHI TO FALSE::  OR OR OR EVERY ISKA ULTA HAI ARRAY ME SABKO TEST PASS KRNA HOGA AGAR EK BHI FAIL HUA TO SIMPLE SAB FAIL HOGE OR OUTPUT IS FALSE


const scores = [70, 85, 90, 100];

const allPassing = scores.every(score => score >= 50);

console.log(allPassing); // Output: true (because all scores are 50 or above)


//array tips and shortcut;

const arrrrrr = [1,2,3,"", null, undefined,[],{},false].filter(Boolean);
console.log(arrrrrr);


console.log([..."Gaurav"]); //['G', 'a', 'u', 'r', 'a', 'v']
//de-structure based qusestion

const array = [1,2,3,4];
let [ka] = array;
console.log(ka); //1