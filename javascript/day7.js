
// const book = {
//     title:"Honesty",
//     author:"adarsh",
//     year:2024
// }

// console.log(book)

// console.log("Title:", book.title);
// console.log("Author:", book.author);

 
// const book = {
//     title:"Honesty",
//     author:"adarsh",
//     year:2024,
//     detail:function(){
//        return ("Title id= "+book.title+"and author name is "+book.author)
//     }
// }


// let res = book.detail()
// console.log(res)


// const book = {
//     title:"Honesty",
//     author:"adarsh",
//     year:2024,
//     updateYear:function(year){
//         this.year=2022;
//     }
    
// }

// book.updateYear(2022);

// console.log(book.year);


const book = {
    title:"Honesty",
    author:"adarsh",
    year:2024,
    library:{
        name:"La Prime library",
        books:["Cat","Rat","Mat","Hat"],
    }
}

// console.log(book.library);

// console.log(book.library.name);
// console.log(book.library.books);
// book.library.books.forEach(book=>{
//     console.log(book);
// })


for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(`${key}: ${book[key]}`);
    }
}