//Make a function that prints the fibonacci numbers sequence;
function fibonacci(num){
    let fibArray = [0,1];
    if(num === 0) return [0];
    if(num === 1) return fibArray;

    for(let i=2;i<num;i++){
        fibArray[i] = fibArray[i-1] + fibArray[i-2];
    }
    return fibArray;
};
console.log(fibonacci(5));

//write function to find greatest common divisor?

function GCD(n1,n2){
    //validation check
    if (n1 < n2) [n1, n2] = [n2, n1]; // Swap values if n1 < n2
    let newN1 = Math.abs(n1);
    let newN2 = Math.abs(n2);

    while(newN2 !==0){
        let temp = newN2;
        newN2 = newN1 % newN2;
        newN1 = temp;
    };
    return newN1;
}
console.log(GCD(24,18)); // output: 6



// find the median of an array?

function median(arr){
    let n = arr.length;
    let mid = Math.floor(n/2);
    if(n % 2 === 0) return (arr[mid-1] + arr[mid]) / 2;
    else return arr[mid];
}

let arr = [3, 1, 2, 4, 5];
console.log(median(arr)); // output: 3


//? Object me sirf ham as a Keys me sirf strings or symbols hi assign kar skte hai  or kuch nhai like {} khud ek object ko kisi objetc me as a key assign nahi kr skte agar ye krnaa hai to hame new Map() ka use krna hoga

let a = {};
let b = { key: "a"};
let c = { key: "b"};

a[b] = "Hi";
a[c] = "Hello";
console.log(a[b]); // output: Hello

console.log(+true); //1
console.log(!"false"); //false


//differnce bw map vs forEach
//map() returns a new array with the results of calling a provided function on every element in the calling array.
//forEach() executes the provided function once for each array element.

let arraayy = [1,2,3,4,5];

let newArray = arraayy.map((ele) => ele*2);
console.log(newArray); // output: [2,4,6,8,10]

arraayy.forEach((ele) => console.log(ele)); // output: 1, 2, 3, 4, 5