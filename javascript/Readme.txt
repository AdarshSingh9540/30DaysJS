
var a = 52;
console.log(typeof a); // "number"

let b = "Adarsh";
console.log(typeof b); // "string"

const c = true;
console.log(typeof c); // "boolean"

let d = [1, 2, 3, 4];
console.log(typeof d); // "object"

function fun() {
  return "adarsh";
}
console.log(typeof fun); // "function"

const student = {
  name: "adarsh",
  age: 23
};
console.log(typeof student); // "object"

let e = undefined;
console.log(typeof e); // "undefined"

let f = null;
console.log(typeof f); // "object" (this is a known quirk of JavaScript)

let g = Symbol("symbol");
console.log(typeof g); // "symbol"

let h = BigInt(9007199254740991);
console.log(typeof h); // "bigint"



let vs const on term of reassignment 

let : variable using let keyword can we reassigned to a different vlaue.  it is an  block variable

const : variable using const cannot reassigned once it initilaize . if you trry to do it it's guve error type error .  it is alos a block scope variable .: If a const variable holds an object or an array, the properties of the object or the elements of the array can be changed. However, the reference to the object or array cannot be changed. Arrays (and objects) are reference types in JavaScript. When you assign one array to another variable, you are copying the reference, not the actual array. Any modification to the array via any of its references will affect the same underlying array.