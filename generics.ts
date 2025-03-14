// Type Generics in Typescript;
// <T,K> is called generic

function getItems<T>(item:T):T{
    return item;
}

let myString = getItems<string>("Hello World"); 
// we dont have need to specify <string> at call time because typescript is guess it by itself
let myNumber = getItems<number>(10);

//The above code is eg. of generix but it is not that much type safe code, means we are passing any type to generic and it take it so this is not good.
//suppose we want to limit the type in our function like it accepts only string or number so we need Constraints in ts.

//we use extends kyeword to specify the type limits.
//(ki ham sirf is type kaa hi t recieve karege)
function getData<T extends string | number>(data:T):T{
    if(typeof data === "string" || typeof data === "number"){
        return data;
    }else{
        throw new Error("Invalid Data Type");
    }4
};

//real world eg.
interface Users{
    id: number;
    name: string;
    age: number;
}
async function getUsers<T extends Users>(url:string):Promise<T[]> {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

//*Note=> now we write type generic for data and return type but when we hover over data inside function it shows data:any but we dont have any isues wth that but on the other hand when we call function to get data we implicitly have tell type generic what kind of data it has to return ok;
const users = await getUsers("htps://jsonplaceholder.typicode.com/users");
console.log(users);



//?accepts multiple types;
function createObject<T,k>(key:T,value:k):[T,k]{
    return [key,value];
};

let myObj = createObject<string, number>("Gaurav", 25);
//["Gaurav":25];

function createObject2<K>(key:string,value:K):Record<string,any>{
    return {[key]: value};
};

//!Some advance eg. and concepts kind off;

//constraints using interfaces with extends;

interface Lengthwise {
    length: number;
}
function getLength<T extends Lengthwise>(obj: T): number {
    return obj.length;
};

getLength({
    length: 10,
    name: "Gaurav"
});
//Now in above function we specify the length interface to the T now T is only deal with arguments which have length property only;

//?Advanced utility types;
// 1. Partial,
// 2. Required,
// 3. Readonly,
// 4. Record,
// 5. Pick,
// 6. Omit,

interface Props {
    id: number;
    name: string;
};

type PartialProps = Partial<Props>; // we have clone of properties here which are in Props it is used in situations like form schema ko copy krna in redux store ki initial state me.

type RequiredProps = Required<Props>; // if we want to make all properties required

type ReadonlyProps = Readonly<Props>; // we want to make all properties readonly

type PickProps = Pick<Props, "id" | "name">; // we want to pick only required properties also we used this thing to pick only specif things from that interface or schemas (.pick());

type OmitProps = Omit<Props, "email" | "isActive">; // we want to omit properties, we need to use an already define or premake interface or type in many situation for aboid time wasting so we use Omit isme hm ek type ya interface dete hai fir 2nd arg. propties dete hai jo hme nahi chate current type me ho to hm isa use krte hail;;


type RecordProps = Record<"a" | "b", number>;
//output type RecordProps = {
//     a: number;
//     b: number;
// };

// a,b keys hongi and number type hoga unki values ke liye;


//Record TypeScript ka ek utility type hai jo humein ek specific object structure define karne ki suvidha deta hai. Yeh Record<K, T> hota hai, jahan:

// K key ka type hota hai.

// T value ka type hota hai.

// Iska use tab hota hai jab humein fixed keys ke saath ek object create karna ho aur un keys ke corresponding values ka bhi type define karna ho.


//? Mapping type for efficiency

type Keys = "apple" | "banana" | "orange" | "kiwi" | "Mango";
type objectwithKeys = {[K in Keys]:string};

// output:
// type objectwithKeys = {
//     apple: string;
//     banana: string;
//     orange: string;
//     kiwi: string;
//     Mango: string;
// };

// assign values to above object
const fruits: objectwithKeys = {
    apple: "red",
    banana: "yellow",
    orange: "orange",
    kiwi: "green",
    Mango: "yellow"
};


//?Index signature in ts: ye ham jab use krte hai jjab hame hamari keys ka pata nahi ho or usme value ko assign krte time bhi uska type define krna hoo, used for dynamic keys

interface NumberDictionary {
    //syntax 
 [key: string]: number; // value of type number hogi idhr
}

const myDict: NumberDictionary = {
 apples: 10,
 oranges: 20,
};

console.log(myDict["apples"]); // Output: 10
console.log(myDict["oranges"]); // Output: 20
  


//? conditional types

type isString<T> = T extends string ? true : false;
type test1 = isString<string>;//yes
type test2 = isString<number>;//no

//eg;
const Positions = {
    "top-right": { top: "10px", right: "10px", flexDirection: "column" },
    "top-left": { top: "10px", left: "10px", flexDirection: "column" },
};

const PositionsValues = (name:keyof typeof Positions)=>{
    return Positions[name] || {};
};

//how this working like first  we know js me code left to right chalta hai ok so ab samjho keyof typeof Positions
//typeof Positions it return positions object whole;
// keyof {object} // it gives all keys in Positions object;

//keyof operator TypeScript mein ek type ke properties ke keys ka union type banata hai. Iska use aapko ek object ki keys ko type ke roop mein define karne ke liye hota hai.
type Person = {
    name: string;
    age: number;
};

type PersonKeys = keyof Person; // "name" | "age"


//typeof operator TypeScript mein JavaScript ke runtime typeof operator ke jaisa hai, lekin yeh static type ke liye use hota hai. Iska use aap kisi existing variable ya object ke type ko derive karne ke liye karte hain.

const person = {
    name: "John",
    age: 30
};

type PersonType = typeof person; // { name: string; age: number }
