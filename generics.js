"use strict";
// Type Generics in Typescript;
// <T,K> is called generic
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getItems(item) {
    return item;
}
let myString = getItems("Hello World");
// we dont have need to specify <string> at call time because typescript is guess it by itself
let myNumber = getItems(10);
//The above code is eg. of generix but it is not that much type safe code, means we are passing any type to generic and it take it so this is not good.
//suppose we want to limit the type in our function like it accepts only string or number so we need Constraints in ts.
//we use extends kyeword to specify the type limits.
//(ki ham sirf is type kaa hi t recieve karege)
function getData(data) {
    if (typeof data === "string" || typeof data === "number") {
        return data;
    }
    else {
        throw new Error("Invalid Data Type");
    }
    4;
}
;
function getUsers(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        return data;
    });
}
;
//*Note=> now we write type generic for data and return type but when we hover over data inside function it shows data:any but we dont have any isues wth that but on the other hand when we call function to get data we implicitly have tell type generic what kind of data it has to return ok;
const users = getUsers("htps://jsonplaceholder.typicode.com/users");
console.log(users);
