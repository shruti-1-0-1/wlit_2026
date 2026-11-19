//DOM Manipulation
const title = document.querySelector("#heading");
title.style.color="red"; 
title.textContent="Things I love";
console.log(title);


const items = document.querySelectorAll(".item-list")
console.log(items)

for(let i=0; i<items.length; i++){
    items[i].style.fontweight = "bold";
    items[i].style.color="pink"
}