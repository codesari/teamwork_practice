// ** Reverse String

// Verilen stringi split metoduyla diziye çevirdik.Böylece stringin her bir karakterine erişim sağlamış olduk
// For döngüsünü dizinin son elemanından başlatıp azaltarak elemanları boş arraya ekledik

const str1 = "bu stringi tamamen tersine cevir";
let arrStr = str1.split("");
let reversedArr = [];

for (let i = arrStr.length - 1; i >= 0; i--) {
  reversedArr += arrStr[i];
}
console.log(reversedArr);

//! ---------------------------------------------------

// String de kendi içinde bir dizidir aslında
//  string[x] diyip x.elemana ulaşabiliyoruz,dizi gibi.

const str2 = "ikinci yontem string";
let newStr = "";
for (let i = str2.length; i >= 0; i--) {
  newStr += str2[i];
}
console.log(newStr);

//! ---------------------------------------------------

const reverseString = (str3) => {
  // split,stringi array e çeviriyor
  // reverse,arrayi ters çeviriyor
  // join,arrayi tekrardan string yapıyor.
  const arrayString = str3.split("");
  const reverseArray = arrayString.reverse();
  const newArrayString = arrayString.join("");
  //   join yerine toString() de kullanabilirdik.
  return console.log(newArrayString);
};

const stringOf = "again";
reverseString(stringOf);
