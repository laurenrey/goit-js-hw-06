const controlSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const changeSize = (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
};

controlSize.addEventListener("input", changeSize);
