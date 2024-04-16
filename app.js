const btnEl = document.querySelector("button"),
  inp = document.getElementById("inp"),
  inp2 = document.querySelector("#inp2"),
  randomNum = document.querySelector("p");

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generate = () => {
  let min = +inp.value;
  let max = +inp2.value;
  randomNum.textContent = getRandomNum(min, max);
};
btnEl.addEventListener("click", generate);
