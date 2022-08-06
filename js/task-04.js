let counterValue = 0;

const decrement = document.querySelector('[data-action = "decrement"]');
const increment = document.querySelector('[data-action = "increment"]');
const value = document.querySelector("#value");

const decrementValue = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

decrement.addEventListener("click", decrementValue);

const incrementValue = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

increment.addEventListener("click", incrementValue);
