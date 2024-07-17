// function myfun(x){
//     return x*x;
// }

// console.log(myfun(5));

// function myfun2(s1,s2){
//     return s1+" "+s2;
// }

// console.log(myfun2("hello","adarsh"))

// const arrowfun =(x,y)=>{
//     let res = x+y;
//     return res;
// } 

// console.log(arrowfun(5,8))


// const checkChar = (str,char) =>{
//     return str.includes(char);
// }

// const checkChar2 = (str, char) => {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return true;
//         }
//     }
//     return false;
// };



// console.log(checkChar2("adarsh","r"))


// function myfun(x,y=8){
//     return x*y;
// }

// console.log(myfun(4,5))
// console.log(myfun(4))

// const greeting =(name,age=22)=>{
//     let mess = `Hello, Mr. ${name}. You're most welcome beacuse you are ${age} year old.`
//     return mess;
// }

// console.log(greeting("adarsh",21))

// console.log(greeting("adarsh"))

// function outerFun(innerFun, n) {
//     let i = 0;
//     while (i < n) {
//         innerFun();
//         i++;
//     }
// }

// function innerFun() {
//     console.log("Hi Adarsh");
// }

// outerFun(innerFun, 5); 



function higherOrderfun(firstFun,secondFun,val){
    let res = firstFun(val);

    let finalRes = secondFun(res);

    return finalRes;
}


function firstFun(x){
    return x+5;
}

function secondFun(y){
    return y*5;

}

let output = higherOrderfun(firstFun,secondFun,5);
console.log(output);