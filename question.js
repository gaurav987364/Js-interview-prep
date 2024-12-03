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