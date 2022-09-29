const bracketTest = (str) => {
  let stackArr = [];

  //? string icinde gez
  for (let i = 0; i < str.length; i++) {
    //? stackArr dizisinin son elemanını char degiskenine ata
    let char = stackArr[stackArr.length - 1];
    //? acilis parantezlerinden birisiyle karsilasirsan onu stack'e at
    if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
      stackArr.push(str[i]);
    } else if (
      (char == "(" && str[i] == ")") ||
      (char == "[" && str[i] == "]") ||
      (char == "(" && str[i] == ")")
    ) {
      stackArr.pop();
    } else return false;
  }
  //? bos stack kontrolü
  return stackArr.length ? false : true;
};

let result = prompt("Enter brackets,please..");

console.log(bracketTest(result));
