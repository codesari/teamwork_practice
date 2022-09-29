// const convertNumbers = (number) => {
//   if(number>=0 && number <=9)
//     switch
//   if(number>=10 && number <=99)
//   if(number>=100 && number <=999)
//   if(number>=1000 && number <=3000)

// }

// convertNumbers(number);

function romanize(num) {
  var lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = "",
    i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

console.log(romanize(3000));
