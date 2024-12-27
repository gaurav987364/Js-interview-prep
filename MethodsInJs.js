//! To Detect Device in js

const detectDeviceType =()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent) ? "Mobile" : "Desktop";
console.log(detectDeviceType());


//! Get the parameters from the URl
// for example url ::=> "https://www.bing.com/search?q=youtube&form=ANSPH1&refig=edfc8203a5d1448b9a4d668a1a6efe75&pc=EDGEDB&pqlth=0&assgl=7&sgcn=youtube&qs=HS&smvpcn=0&swbcn=5&sc=5-0&sp=4&ghc=0&cvid=edfc8203a5d1448b9a4d668a1a6efe75&clckatsg=1&hsmssg=0";


//console.log(window.location.protocol); 
// https
//console.log(window.location.href); 
// complete url
//console.log(window.location.hash); 
// 
//console.log(window.location.pathname) 
//search 
//console.log(window.location.search); 
// q=youtube&form=ANSPH1&refig=edfc8203a5d1448b9a4d668a1a6efe75&pc=EDGEDB&pqlth=0&assgl=7&sgcn=youtube&qs=HS&smvpcn=0&swbcn=5&sc=5-0&sp=4&ghc=0&cvid=edfc8203a5d1448b9a4d668a1a6efe75&clckatsg=1&hsmssg=0"
//console.log(window.location.host); 
//www.bing.com
//console.log(window.location.hostname); 
//www.bing.com


//! Deep copy vs shallow copy

//?deepcopy  Bacically deep copy me hm kisi chij ko deeply copy krte hai naki sirf uska refrence leete hai deep copy me alag se memory allocate and use hoti hai...
//* key points
// they are taken the new space in momory.
// they are not modified so that original one no chnages by change in the copied one.
const obj = {
    name: "Gaurav",
    age: 25,
    city: "New York"
};
const deepCopy = JSON.parse(JSON.stringify("your obj name for copied.",obj));
console.log(deepCopy);

//? shallow copy  Bacically shallow copy me hm kisi chij ko shallow copy krte hai naki sirf uska refrence leete hai. just like js refrennces.
//* key points 
// we can modify and do changes in the shallowcopy.
// they do not occupy the space in memory.
// they are used for some small changes.

//for eg
//making a shallow copy of the object
const shallowCopy = {...obj};
console.log(shallowCopy);

//! Wait fucntions
// is js it does provide us a setTimeout function , but it is not uused in the async/await because it does not return a Promise... So we have to make our own wait/sleep function

//? is wait function ka use :: haam tab kar skate hai suppose we have some data which comes from api but it comes very slow or fast and we will display that data to our ui after some loading effect so we use this custom build wait() function so that it enable the function call after some time; basically await ka time or badha skate hai ....
const wait = (ms)=> new Promise((resolve)=> setTimeout(resolve,ms));
console.log(wait());//? it return a promise 

//console.log("Run first"); // just for test time delay;
const ourAsyncFunction = async ()=>{
    await wait(1000);
    console.log("Async function completed");
};
ourAsyncFunction();


//! Function to format currency;;
// basically convert any number to that currency 

const formatCurrencyFunction = (number)=>{
    return new Intl.NumberFormat("en-US", {style: "currency", currency:"INR", currencySign:"standard"}).format(number);
};
console.log(formatCurrencyFunction(3404747.84438));

// console.log(new Intl.NumberFormat("en-US", {style:"percent", notation:"standard"}).format(200));

//? More about the intl.NumberFormat() Method
// it takes ("format like "en-US, hi-IN" ", {style:"which is of 4 types currency, unit, percent, decimal", more items}).format(number or our params);

//? currency format
const formatCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    currencySign: "standard"
}).format(12345.678);
console.log(formatCurrency); // Output: ₹12,345.68

//? percent format
const formatPercent = new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 2
}).format(0.1234);
console.log(formatPercent); // Output: 12.34%

//? unit format
const formatUnit = new Intl.NumberFormat("en-US", {
    style: "unit",
    unit: "kilometer-per-hour"
}).format(100);
console.log(formatUnit); // Output: 100 km/h

//? decimal format
const formatDecimal = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 1,
    maximumFractionDigits: 3
}).format(1234.5678);
console.log(formatDecimal); // Output: 1,234.568


//! copy paste data from clipboard
async function copyText() { 
    try { 
        const sourceTextarea = document.getElementById('sourceTextarea');
        const textToCopy = sourceTextarea.value; 
        await navigator.clipboard.writeText(textToCopy); 
        console.log('Text copied to clipboard:', textToCopy); 
    } catch (err) { 
        console.error('Failed to copy text:', err); 
}}
//? paste data from clipboard
async function pasteText() { 
    try { 
        const textFromClipboard = await navigator.clipboard.readText(); console.log('Text pasted from clipboard:', textFromClipboard); 
    } catch (err) { 
        console.error('Failed to paste text:', err); 
}}
//? call both functions on button actions in html;

const coptBtn = document.getElementById('copy');
 coptBtn.addEventListener('click', copyText);

const pasteBtn = document.getElementById('paste');
 pasteBtn.addEventListener('click', pasteText);


///! Random shuffle Array best practices

//? method-1

const array1 = [1, 2, 3, 4, 5];
const results = array1.sort(()=>Math.random() * -0.5);
console.log(results);

//? method-2 (in perspective of memory game)

const emoji = ["🎮","🥻","👗","🐦‍⬛","🪼","🦐","👻"];
//? is method se proper shuffle hoga or undefined create nhi hoga kisi bhi index par
const shuffleArrayFunc = ()=>{
    const arrayCopy = [...emoji,...emoji]; // double the array
    const currentIndex = arrayCopy.length; // get length;

    while(currentIndex !== 0){
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--; // doing for previous se kam k liye

        [arrayCopy[currentIndex], arrayCopy[randomIndex]] = [arrayCopy[randomIndex],arrayCopy[currentIndex]];
    }
    return arrayCopy;
};
console.log(shuffleArrayFunc());


//! generating random gameBoard or nested numbers array
let GameType = "4x4" | "6x6";

function generateRandomBoard(){
    let ROWS;
    let COLS;

    //? assign the values 
    if(ROWS === "4x4"){
        ROWS = 4;
        COLS = 4;
    } else{
        ROWS = 6;
        COLS = 6;
    };

    const board = []; // simplye creting emppty array
    for(let i=0;i<ROWS;i++){
        board.push([]); // pusing empty array based on number of rows
        for(let j=0; j<COLS;j++){
            board[i].push(0);
        }
    }
    // return board; // when we do this we get
    // [
    //     [
    //         0,0,0,0,
    //         0,0,0,0,
    //         0,0,0,0,
    //         0,0,0,0
    //     ],
    //     [
    //         0,0,0,0,
    //         0,0,0,0,
    //         0,0,0,0,
    //         0,0,0,0
    //     ],
    //     [
    //         0,0,0,0,
    //         0,0,0,0,
    //         0,0,0,0,
    //         0,0,0,0
    //     ],
    //     [
    //         0,0,0,0,
    //         0,0,0,0,
    //         0,0,0,0,
    //         0,0,0,0
    //     ],

    // ]

    //but we want 
    return insertRandomNumbers(board);
};

function insertRandomNumbers(board){
    const computedBoard = board;
    let NUMB_OF_SPOTS;
    let MAX_NUMBERS;

    if(computedBoard.length === 4){
        NUMB_OF_SPOTS = 16;
        MAX_NUMBERS = 4;
    } else{
        NUMB_OF_SPOTS = 36;
        MAX_NUMBERS = 6;
    };

    //creating random empty object
    const randomSpots = {};


    //logic of filling object
    while(true){
        if(Object.keys(randomSpots).length === NUMB_OF_SPOTS){
            break;
        }
         //getting the values of x,y on random keys
            const x = Math.floor(Math.random() * MAX_NUMBERS);
            const y = Math.floor(Math.random() * MAX_NUMBERS);
            const randomSpotsKey = Math.random();

        if(!Object.values(randomSpots).find((val)=>val.x === x && val.y === y)){
            randomSpots[randomSpotsKey] = {x,y};
        }
    };

    //some more part
    //? now finally fulfilled our array with object key values pairs
    let counter = 2;
    let currentNumber = 1;

    Object.values(randomSpots).forEach((spot)=>{
        computedBoard[spot.x][spot.y] = currentNumber; // filling the board
        counter--;
        if(counter === 0){
            counter = 2;
            currentNumber++;
        }
    });
    return computedBoard;
};



//? coding question

[a] = [2,3,4,5];
console.log(a); //? guess the output

// so the result is 2 by doing this we simply get the first value or our index of array and [a] is assign to window object  like var [a] = 2; ok;



//
function spread(...args){
    return [...args];
};
console.log(spread(1,2,3,4,5,"hi","hello"))


const o = {
    ["name"]:"Gaurav",
    age: 25,
    location: "Delhi",
    [Symbol("key")]: "value"  //symbol is used for private properties in js
};
o.name = "Vikky"
o.Symbol = "sex" // created a symbol key and value as sex 
//? is js object if koi property phele se object me nahi hai hai to hm simple usko bhar se add kr skte hai vo ho jaiti hai but only in normal objects not in constructor ok;

for(key in o){
    console.log(key, o[key]); //output will be name, Vikky, age, 25, location, Delhi, Symbol(key), value
}
console.log(res);