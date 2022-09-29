//! Write a JavaScript program that takes 3 integers from a user and displays the largest.

// let num1 = 81,
//   num2 = 91,
//   num3 = 100,
//   largest;
// largest = num1;

// if (num2 > num3) {
//   if (num2 > largest) largest = num2;
// } else {
//   if (num3 > largest) largest = num3;
// }

// console.log(largest);

// let num1 = +prompt("1.sayiyi giriniz");
// let num2 = +prompt("2.sayiyi giriniz");
// let num3 = +prompt("3.sayiyi giriniz");

// const largestNumofThree = (num1, num2, num3) => {
//   if (num1 > num2 && num1 > num3) return `En buyuk sayi ${num1} dır..`;
//   else if (num2 > num1 && num2 > num3) {
//     return `En buyuk sayi ${num2} dır..`;
//   } else return `En buyuk sayi ${num3} dır..`;
// };

// console.log(largestNumofThree(num1, num2, num3));

//! Write a basic Calculator with JavaScript. Ask the user to enter 2 numbers and an operand (+,-,*,/). Execute the desired operation and display the result.

// ! İki sayi al , dört işlem yap (fonksiyon ile)

// let num1 = 7,
//   num2 = 8;
// operand = "+";

// const topla = (num1, num2) => num1 + num2;
// const cikar = (num1, num2) => {
//   if (num1 > num2) {
//     return num1 - num2;
//   } else {
//     return num2 - num1;
//   }
// };
// const carp = (num1, num2) => num1 * num2;

// const bol = (num1, num2) => {
//   if (num1 > num2) {
//     return (num1 / num2).toFixed(2);
//   } else {
//     return (num2 / num1).toFixed(2);
//   }
// };

// const result = (num1, num2, operand) => {
//   if (operand === "+") {
//     return console.log(topla(num1, num2));
//   } else if (operand === "-") {
//     return console.log(cikar(num1, num2));
//   } else if (operand === "*") {
//     return console.log(carp(num1, num2));
//   } else if (operand === "/") {
//     return console.log(bol(num1, num2));
//   } else console.log("gecersiz operator");
// };

// result(5, -4, "/");

//! Write a JavaScript program that asks the user to enter a day, check this day, and display whether a weekday or not.
// Example1: input = Tuesday ⇒ output: Tuesday is a weekday
// Example2: input = Saturday⇒ output: Saturday is not a weekday

// girilen günler harf duyarlılığına sahip

const haftaİciMi = (day) => {
  switch (day) {
    case "pazartesi":
    case "salİ":
    case "carsamba":
    case "persembe":
    case "cuma":
      console.log(`${day} gunu haftaici gundur.`);
      break;
    case "cumartesi":
    case "pazar":
      console.log(`${day} gunu haftaici gun degildir.`);
      break;
    default:
      console.log("gecersiz gun");
  }
};

let day = prompt("bir gün ismi giriniz");
let result = day.toLowerCase();
console.log(result);
haftaİciMi(result);
