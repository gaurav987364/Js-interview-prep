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


//object realted question
let arrar = [
    ["name", "John"],
    ["age", 30],
    ["city", "New York"]
];
let obj = Object.fromEntries(arrar); //? Converts an array of key-value pairs into an object
console.log(obj); // output: { name: 'John', age: 30, city: 'New York' }


//Q what are proxy in js?
//? A Proxy is an object that wraps another object (target object) or function and intercepts operations on it, allowing you to define our custom (methods) behavior for fundamental operations (e.g., property lookup, assignment, enumeration, function invocation, etc.).


const target = {
    message: "Hello, World!"
};
const handler = {
    get:()=>{
        return "Hello, Proxy!";
    },
    set:()=>{
        console.log("Property set!");
        return true;
    }
};
const proxy = new Proxy(target, handler);
console.log(proxy.message); // output: Hello, Proxy!
proxy.message = "New message"; // output: Property set!


// find factorial of a number using recursion?
function factorialByRecursion(n){
    return n * factorialByRecursion(n-1);
};
// console.log(factorialByRecursion(5)); // output: 120


//question based on function arguments passing
function sums(a=5,b=5){
    console.log(a+b); // output: 10
};
sums();// agar hm kuch pass nahi krege to default value use hogi jo ki 5 hai or output ayga ok 

sums(10,20); // output: 30
// ** But agar hm null pass krege to default value use nahi hogi or output ayga 5+null = 5
//* sirf undefined pass krege to bhi defualt value use hogi
sums(undefined,10);


//? Short-circuiting in js;   && ||
console.log('Hi' && true && 0n && 50); // 0n
console.log("Ok" && true && 0===0 && "Done...") // Done...
console.log(false || "Hmm" || {} || undefined); //Hm
console.log(false || null || 0 || undefined) //undefined

var y = 1;
if(function f(){}){
    y += typeof f;
}
console.log(y); //1undefined
// because if() block ka code alag context me execute hota hai



// question convert string a.b.c.d.e into {a:{b:{c:{d:e}}}}
function makeObject(str){
    const strArr = str.split(".");
    const result = strArr.reduceRight((acc,curr)=>({
        [curr]:acc
    }))
    return result;
};
console.log(makeObject("a.b.c.d.e.f"));