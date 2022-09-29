const numberOfVowels = (str) => {
  let vowels = "aeıioöuü".split("");
  let arrStr = [];
  let count = 0;
  arrStr = str.toLowerCase().split("");
  console.log(arrStr);
  for (let i in arrStr) {
    for (let j in vowels) {
      if (arrStr[i] == vowels[j]) {
        count++;
        break;
      }
    }
  }
  return count;
};

const btn = document.querySelector(".btn");
const newP = document.createElement("p");
newP.setAttribute("class", "prf");
btn.after(newP);

btn.addEventListener("click", () => {
  let content = document.getElementById("txtarea").value;

  if (content) {
    let result = numberOfVowels(content);
    let text = document.querySelector(".prf");

    text.innerHTML = `There are ${result} vowels in <span style="color:red"> ${content}</span> `;
  } else {
    alert("Please,enter a string..");
  }
});

// 16.09.2022 Cuma Teamwork Cozumu

// const findVowel = (str) => {
//   const vowels = "aeıioöuü".split("");
//   let arrStr = str.toLowerCase().split("");
//   let counter = 0;
//   for (let i in arrStr) {
//     for (let k in vowels) {
//       if (arrStr[i] === vowels[k]) {
//         counter++;
//       }
//     }
//   }
//   return counter;
// };
// const button = document.querySelector("#check-btn");
// button.addEventListener("click", () => {
//   const value = document.querySelector("#textArea").value;
//   if (!value) {
//     alert("Enter valid string.");
//   } else {
//     // const span = document.getElementsByTagName("span").innerHTML;
//     document.querySelector("#result").innerHTML = `There are ${findVowel(
//       value
//     )} vowels in <span style="color:red">${value}</span>`;
//     // document.querySelector("#textArea").style.color = "red";
//   }
// });
