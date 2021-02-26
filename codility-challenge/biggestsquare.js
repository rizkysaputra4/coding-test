// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let biggestSquare = A.length;
  let i = 0;
  let toleratedErr = A.length - biggestSquare;
  let biggestNum = 0;

  while (i < A.length + 1) {
    if (A[i] < biggestSquare && toleratedErr < 1) {
      biggestSquare -= 1;
      i = -1;
      toleratedErr = A.length - biggestSquare;
      biggestNum = -1;
    } else if (A[i] < biggestSquare) {
      biggestNum = -1;
      toleratedErr -= 1;
    }

    if (i === A.length) {
      biggestSquare -= 1;
      i = -1;
      toleratedErr = A.length - biggestSquare;
      biggestNum = -1;
    }

    biggestNum++;
    i++;

    if (biggestNum === biggestSquare) {
      return biggestSquare;
    }
  }
}
