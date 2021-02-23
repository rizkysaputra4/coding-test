//soal ini sudah muncul sebelumnya di bersamaan dengan soal nomor 2?

const palindromeComb = (input = 7611655795) => {
  var input = String(input).split(" ").join("").split("");
  var firstHalf = [],
    halfRest = [];
  var inputLen = input.length;
  var i = 0;
  var uniqueElement = 0;
  while (i <= inputLen) {
    i++;
    getChar = input[i];
    input.splice(i, 1);
    if (input.includes(getChar)) {
      firstHalf += getChar;
      halfRest += getChar;
      index = input.indexOf(getChar);
      input.splice(index, 1);
      i = 0;
    } else {
      uniqueElement += 1;
      input.push(getChar);
    }

    if (uniqueElement > 1) {
      return "Cannot find possible series to construct palindrome order";
    }

    if (input.length <= 1) {
      midVal = input[0];
      if (input.length === 0) {
        midVal = "";
      }
      palindrome = firstHalf + midVal + halfRest.split("").reverse().join("");
      result = palindrome;
      return result;
    }
  }
};

console.log(palindromeComb());
