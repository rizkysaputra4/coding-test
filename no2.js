function numTwo() {
  console.log("hello num two");
  console.log(solution(2, 6));
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  var ARes = A;
  var BRes = B;
  var result = "";
  var countA = 0;
  var countB = 0;
  for (var i = 0; i < A + B; i++) {
    if (ARes >= BRes && countA < 2) {
      result += "a";
      ARes -= 1;
      countB = 0;
      countA += 1;
    } else if (ARes <= BRes && countB < 2) {
      result += "b";
      BRes -= 1;
      countA = 0;
      countB += 1;
    } else if (countA < 2) {
      result += "a";
      ARes -= 1;
      countB = 0;
      countA += 1;
    } else if (countB < 2) {
      result += "b";
      BRes -= 1;
      countA = 0;
      countB += 1;
    }
  }
  return result;
}

module.exports = numTwo;
