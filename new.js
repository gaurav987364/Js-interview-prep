function charCount(str){
    let charCount = {};
    for(let char of str) {
        if(charCount[char]) {
            charCount[char] += 1;
        } else {
            charCount[char] = 1;
        } 
    }
    return charCount;
};

console.log(charCount('Hello!'));
 // Output: { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1, '!': 1 };



//guess the output;

if([]){
    console.log("⭐")
};
//⭐

if([] == true){ 
    // in js tyep coercion is performed here first [] convert into "" and again "" convert to 0 and true convert to 1 so 0 therfore we get else block code
    console.log("⭐⭐⭐")
} else {
    console.log("👻")
}
//👻