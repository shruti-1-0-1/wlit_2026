const heading = document.getElementById("heading");
const button = document.getElementById("changeFont");
const textbox = document.getElementById("fontsize");

button.addEventListener("click", changeFontSize);

function changeFontSize() {
  let pixel = textbox.value;
  let px = String(pixel) + "px";
  heading.style.fontSize = px;
  console.log(pixel);
  console.log(heading);
}
