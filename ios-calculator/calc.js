const p = document.querySelector(".display-p");

const numberOne = document.querySelector(".number-1");
const numberTwo = document.querySelector(".number-2");
const numberThree = document.querySelector(".number-3");
const numberFour = document.querySelector(".number-4");
const numberFive = document.querySelector(".number-5");
const numberSix = document.querySelector(".number-6");
const numberSeven = document.querySelector(".number-7");
const numberEight = document.querySelector(".number-8");
const numberNine = document.querySelector(".number-9");

const plus = document.querySelector(".addition");

numberOne.addEventListener("click", () => {
  const number = document.createTextNode("1");
  p.appendChild(number);
});
numberTwo.addEventListener("click", () => {
  const number = document.createTextNode("2");
  p.appendChild(number);
});
numberThree.addEventListener("click", () => {
  const number = document.createTextNode("3");
  p.appendChild(number);
});
numberFour.addEventListener("click", () => {
  const number = document.createTextNode("4");
  p.appendChild(number);
});
numberFive.addEventListener("click", () => {
  const number = document.createTextNode("5");
  p.appendChild(number);
});
numberSix.addEventListener("click", () => {
  const number = document.createTextNode("6");
  p.appendChild(number);
});
numberSeven.addEventListener("click", () => {
  const number = document.createTextNode("7");
  p.appendChild(number);
});
numberEight.addEventListener("click", () => {
  const number = document.createTextNode("8");
  p.appendChild(number);
});
numberNine.addEventListener("click", () => {
  const number = document.createTextNode("9");
  p.appendChild(number);
});

plus.addEventListener("click", (e) => {
  let firstOperand = p.innerText;
  p.innerText = "";
  //   let secondOperand = p.innerText;

  if (e.target.classList.contains("equal")) {
    p.innerText = firstOperand + p.innerText;
  }
});
