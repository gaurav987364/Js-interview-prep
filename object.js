const myObj = {
    name: 'gaurav',
    age:24,
    sex:'male',
    hobby : {
        name:'reading',
        time:'morning'
    },
    address:{
        street:'123 Main St',
        city:'New York',
        state:'NY'
    }
}

console.log(Object.keys(myObj)) // give array of keys of objects
console.log(JSON.stringify(myObj))
