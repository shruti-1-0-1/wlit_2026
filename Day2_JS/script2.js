// DOM Manipulation

// Creating Elements
const ul = document.querySelector("ul");
// console.log(ul);
const li = document.createElement("li");
// console.log(li);

// Appending Elements

ul.append(li);

// Modifying Texts
li.innerText = "Texting";

// Modifying Attributes

li.setAttribute("id", "heading");
li.removeAttribute("id");

// Removing Elements

li.remove();