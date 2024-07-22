
const button = document.getElementById("btn");
const content = document.getElementById("content");

button.addEventListener("click",()=>{
    content.innerText = "Content has been changed !"
})


const img = document.getElementById("image")

img.addEventListener("dblclick",()=>{
    img.style.opacity= 0.5;
})

const para = document.querySelector("p");
para.addEventListener("mouseover",()=>{
    para.style.backgroundColor="red";
    para.style.color="white"
    para.style.fontSize="20px"
})

para.addEventListener("mouseout",()=>{
    para.style.backgroundColor="";
    para.style.color="black"
    para.style.fontSize="15px"
})

const input = document.getElementById("input");


input.addEventListener("keydown", (e) => {
    console.log("Keydown:", input.value);
});


input.addEventListener("keyup", (e) => {
    console.log("Keyup:", input.value);
});


const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    console.log("Form submitted ");
});


const dropdown = document.getElementById("dropdown");
const menu = document.getElementById("menu");
dropdown.addEventListener("change", () => {
    const selectedOption = dropdown.options[dropdown.selectedIndex].text;
    menu.textContent = `I like ${selectedOption}`;
});



const list = document.getElementById("list1");
list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(event.target.textContent);
    }
});

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log("Clicked item:", event.target.textContent);
    }
});


function addListItem(text) {
    const newItem = document.createElement("li");
    newItem.textContent = text;
    list.appendChild(newItem);
}

addItemButton.addEventListener("click", () => {
    addListItem(`Item ${list.children.length + 1}`);
});