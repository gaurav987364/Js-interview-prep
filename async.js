new Promise((resolve)=>{
    resolve(1);
    Promise.resolve().then(()=>{
        console.log(2);
    }); 
}).then((data)=>{
    console.log(data)
});
console.log(3);
//3 2 1 ok;


new Promise((resolve)=>{
    Promise.resolve().then(()=>{
        resolve(1);
        Promise.resolve().then(()=>{
            console.log(2);
        });
    })
}).then((data)=>{
    console.log(data)
});
console.log(3);
// 3 1 2 ok




let score = 0;
async function increaseScore(){
    score = score + (await 2); //(await 2) is converted into Promise.resolve(2)
    console.log("first score",score);
}

increaseScore();
score = score + 1;
console.log("second score", score);
//1 2

async function name(params) {
    
};

console.log(name); // [Function: name] ok


console.log("1");
setTimeout(() => {
    console.log("2");
}, 0);  
console.log("3");
Promise.resolve().then(()=>{
    console.log("4");
})
// 1 3 4 2