const button = document.getElementById("btn");
const body = document.querySelector("body");
const href = document.querySelector(".href__color");

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
 
let num

function setRandomColor() {
 document.body.style.backgroundColor = num;
}
function setRandomColorAdd() {
href.textContent = num;
}
function setColorHref() {
  href.style.color = num;
}

button.addEventListener("click", () => {
  console.log("click");
  num = getRandomColor();
console.log(num);
  setRandomColor();
  setRandomColorAdd();
  setColorHref();
});