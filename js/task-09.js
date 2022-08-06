function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorButton = document.querySelector("button.change-color");
const colorValue = document.querySelector("span.color");
const bodyEl = document.querySelector("body");

changeColorButton.addEventListener("click", (event) => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorValue.innerHTML = `${getRandomHexColor()}`;
});
