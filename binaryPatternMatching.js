function binaryPatternMatching(pattern, s) {
  const sArray = ("" + s).split("");
  let converSToBinary = "";
  for (let char of sArray) {
    if (/[aeiouy]/.test(char) === true) {
      converSToBinary = converSToBinary + 0;
    } else if (/[bcdfghjklmnpqrstvwxz]/.test(char) === true) {
      converSToBinary = converSToBinary + 1;
    } else {
      converSToBinary = converSToBinary + " ";
    }
  }

  let counter = converSToBinary.split(pattern).length;
  console.log(counter);
  return counter;
}

binaryPatternMatching("010", "amazing"); // answer should be 2
