function numThree() {
  console.log("hello num3");
  console.log(solution(19, 4));
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  var i = 0;
  var rounds = 0;
  var chips = N;
  while (i < N) {
    if (K !== 0 && chips % 2 === 0) {
      chips = chips / 2;
      K -= 1;
    } else {
      chips -= 1;
    }

    rounds += 1;

    if (chips < 1) {
      break;
    }
  }

  return rounds - 1;
}

module.exports = numThree;
