//Palindrome
const palindromeComb = (input = 761165575) => {
  input = String(input).split(" ").join("").split("");
  var firstHalf = [],
    halfRest = [];
  inputLen = input.length;
  i = 0;
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
      input.push(getChar);
    }

    if (input.length <= 1) {
      midVal = input[0];
      if (input.length === 0) {
        midVal = "";
      }
      palindromeCollection =
        firstHalf + midVal + halfRest.split("").reverse().join("");
      result = {
        result: palindromeCollection,
      };
      return result;
    }

    inputLen = input.length;
  }
};

console.log(palindromeComb());

//Associative-Array
data = [
  ["row1", 2, "S"],
  ["row2", 2, "A"],
  ["row3", 1, "S"],
  ["row4", 3, "S"],
  ["row5", 1, "A"],
  ["row6", 4, "A"],
  ["row7", 5, "S"],
  ["row8", 5, "A"],
];
const associateArray = (array = data) => {
  //Sorting data
  i = 0;
  while (i < array.length) {
    for (j = i; j < array.length; j++) {
      if (array[i][1] > array[j][1]) {
        container = array[i];
        array[i] = array[j];
        array[j] = container;
        i = 0;
      }
    }
    i++;
  }

  //Find the Associate Array
  i = 0;
  result = [];
  lenArr = array.length;
  while (i < lenArr) {
    hasPair = false;
    for (j = i + 1; j < array.length; j++) {
      if (array[i][1] === array[j][1]) {
        hasPair = true;
        if (array[i][2] === "S") {
          sVal = array[i][0];
          aVal = array[j][0];
        } else {
          sVal = array[i][0];
          aVal = array[j][0];
        }
        array.splice(j, 1);
      }

      if (j === array.length - 1 && hasPair === false) {
        if (array[i][2] === "S") {
          sVal = array[i][0];
          aVal = "";
        } else if (array[i][2] === "A") {
          sVal = "";
          aVal = array[i][0];
        }
      }
    }
    res = [sVal, aVal];
    result.push(res);
    lenArr = array.length;
    i++;
  }
  return result;
};

console.log(associateArray());
