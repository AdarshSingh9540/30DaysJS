// const name = "Adarsh Singh";
// const  age = 21;

// const mess = `My name is ${name} and i am ${age} years ols`
// console.log(mess)


// const message = `
// Hello there,
// My name is ${name}.
// I am ${age} years old.
// Nice to meet you!
// `;

// console.log(message)




// const numbers = [10, 20, 30, 40, 50];

// const [first,second] = numbers;
// console.log(`First element: ${first}`);
// console.log(`Second element: ${second}`);


// const book = {
//     author: "Adarsh",
//     name: "Honey in the Pool",
//     price: 399,
//     available: "E-commerce store"
// };

// const { author, name } = book;
// console.log(`Author: ${author}. Title: ${name}`);

// const arr1 = ["a" , "b", "c","d"];
// const arr2 = [...arr1,"e","f"];
// console.log(arr2.toString())



// function sum(...numbers) {
//     return numbers.reduce((acc, num) => acc + num, 0);
// }
// console.log(sum(1, 2, 3));  
// console.log(sum(5, 10, 15, 20));  
// console.log(sum(2));  
// console.log(sum());  


// function product(num1 ,num2=5){
//     return num1*num2;
// }

// console.log(product(2,10))


// const book = {
//     author: "Adarsh",
//     name: "Honey in the Pool",
//     price: 399,
//     available: true,
//     printInfo() {
//         return `Title: ${this.name}, Author: ${this.author}, Price: ${this.price}, Available: ${this.available}`;
//     }
// };

// console.log(book.printInfo());
const propertyName = "color";
const propertyValue = "blue";

const obj = {
    [propertyName]: propertyValue
};

console.log(obj);
