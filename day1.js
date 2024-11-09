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
function isComplexPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Define pointers for the start and end of the string
    let left = 0;
    let right = cleanedStr.length - 1;
    
    // Compare characters from both ends
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

// Example usage
console.log(isComplexPalindrome('A man, a plan, a canal, Panama')); // true
console.log(isComplexPalindrome('No lemon, no melon!')); // true
console.log(isComplexPalindrome('Hello, world!')); // false
