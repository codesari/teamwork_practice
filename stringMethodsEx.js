// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

const twoDigit = (str) => {
  let arrayStr = str.split("");
  console.log(arrayStr);
  let twoStr = "";
  let result = [];

  //   str.length % 2 != 0 && arrayStr.push("_");
  if (str.length % 2 != 0) {
    arrayStr.push("_");
  }

  for (let i = 0; i < arrayStr.length; i += 2) {
    twoStr = arrayStr[i] + arrayStr[i + 1];
    result.push(twoStr);
  }

  return result;
};

console.log(twoDigit("abcdefghijklmnopr"));
