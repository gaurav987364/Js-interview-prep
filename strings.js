console.log("hi" + " " + "ok") // just concat with + and seprate strings witth space

let bio = "hey my name is gaurav";

console.log(bio.length) // 25
console.log(bio.replace("hey", 'Hello')) // Hello my name is gaurav
console.log(bio.indexOf("gaurav")) // 15
console.log(bio.lastIndexOf("my"))
console.log(bio.startsWith("Hello")) // true
console.log(bio.split("-"))  // based on - give one long senetence in array of string and based on empty string give , based sepration
console.log(bio.charAt(10)) // e
console.log(bio.at(-5)) // a
console.log(bio.substring(4,15)) // my name is // return only substring lies b/w start and end point

// question based on strings

//? sliding window based (o)n time complexity 
// Write a function that takes a string as an argument and returns the length of the longest substring without repeating characters.


// map() ke has and get method uses => has() method return boolean indicating whether an element with the specified key exists or not. and get() method give that value related to that key

//! basiclaly ek esa function banana hai jo simpley str ko le rha hai or sirf lenght uski count hogi mtlb vo ek esa sequence jisme na word repaet hoga na koi space repaett hoga only pure words so sabsbe lamba sequence hi maxlenght of substring hoga
function getlongestChar(str) {
   let n = str.length; // getting length of string for iteration
   let maxLength = 0; // max lenght of string after looping 
   let start = 0; // it is our start window after every charecter
   let charIndexMap = new Map(); // map for stroing index of charctr;
   let maxSubStrings = ""; // getting alll sustring for better understanding

   for(let end=0; end< n; end++){
    let charStoreing = str[end];

    // check for repeat charcters
    if(charIndexMap.has(charStoreing) && charIndexMap.get(charStoreing) >= start){
        start = charIndexMap.get(charStoreing) + 1; // if repeating then start from next of repeating character
    }

    //update the map container for charecter index's
    charIndexMap.set(charStoreing, end);

    //claculate max substrings
    let currentLength = end - start + 1;
    if(currentLength > maxLength){
        maxLength = currentLength;
        maxSubStrings = str.substring(start, end + 1);
        console.log(maxSubStrings);
    }
   }
   console.log(maxSubStrings)
   return maxLength;
}
console.log(getlongestChar("abcd efgh ijkl mnop qrst uvwx yz"));





// Write a function to determine if a given string of parentheses (and other characters) is valid. A string is considered valid if open brackets are closed in the correct order.

// Write a function that compresses a string such that 'aaabb' becomes 'a3b2'. If the compressed string is not smaller than the original string, return the original string.

// Write a function to check if two given strings are anagrams of each other.

// Write a function to find the longest palindromic substring in a given string.

// Write a function that implements wildcard pattern matching with support for '?' and ''. The '?' matches any single character, and '' matches any sequence of characters (including the empty sequence).

// Write a function to find the minimum window in a string s that will contain all the characters of another string t

// implement regular expression matching with support for '.' and ''. The '.' matches any single character, and '' matches zero or more of the preceding element.

// Write a function to return all the permutations of a given string.

// Write a function to convert a given string into a zigzag pattern on a given number of rows, and then read it line by line.

// Write a function to find the longest common subsequence of two given strings.

// Write a function to determine if a given string can be segmented into a sequence of one or more dictionary words.

// Write a function to determine if one string is a scrambled version of another string.

// Write a function to find the longest palindromic subsequence in a given string.

// Write a function to find the length of the longest substring that contains at most k distinct characters.

// Write a function to find the maximum value in each sliding window of size k for an array.

// Write a function to find the kth smallest element in a sorted matrix.

// Write a function to compute how much water it can trap after raining, given an array representing the elevation map.

// Write a function to find the median of two sorted arrays.

// Given a 2D board and a word, write a function to determine if the word exists in the grid.

// Write a function to find the length of the longest increasing subsequence in an array.

// Write a function to find the minimum edit distance between two strings.

// Write a function to find the shortest transformation sequence from start word to end word.

// Write a function to partition a string such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of the string.

// Write a function to decode a message containing digits to letters using the mapping 'A'->1, 'B'->2, ... 'Z'->26.

// Write a function to find a path from top left to bottom right which minimizes the sum of all numbers along its path in a grid.

// Write a function to count the number of smaller elements to the right of each element in an array.

// Given a 2D board and a list of words, find all the words in the board.

// Write a function to reverse the nodes of a linked list k at a time and return its modified list.

// Write a function that matches a string to a pattern with '?' and '*' wildcards.

// Write a function to find the length of the longest valid (well-formed) parentheses substring.

// Write a function to find the area of the largest rectangle in a histogram.

// Write a function to determine if you can finish all courses given prerequisites.

// Write a function to find the order of courses you should take to finish all courses given prerequisites

