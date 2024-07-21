// const ID =document.getElementById("head")

// ID.addEventListener("click",() =>{
//         ID.innerHTML="Good Morning"
// })

// const backGrounds = document.getElementsByClassName("bg");

// for (let i = 0; i < backGrounds.length; i++) {
//   backGrounds[i].addEventListener("click", () => {
//     backGrounds[i].style.backgroundColor = "blue";
//   });
// }

// const newElement = document.createElement("h1");
// newElement.textContent = "This is a new paragraph added dynamically.";
// newElement.style.backgroundColor="blue";
// newElement.style.color = "white";
// document.body.appendChild(newElement);


// const newList = document.createElement("li");
// newList.textContent="Help";
// const ul = document.querySelector("ul");
// ul.appendChild(newList)


// const ID = document.getElementById("head");
// if (ID && ID.parentNode) {
//     ID.parentNode.removeChild(ID);
// }

// const bgElement = document.querySelector('.bg');
// if(bgElement && bgElement.parentNode){
//     bgElement.parentNode.removeChild(bgElement)
// }


const img = document.querySelector("#img");

const originalSrc = img.src;
img.addEventListener("mouseover", () => {
    ! (img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWhZy2fCbsIg6N8L8cu3lrdK3tJ14RV2lqmw&s");
});

img.addEventListener("mouseout", () => {
     (img.src = originalSrc);
});