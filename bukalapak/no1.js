function numOne() {
  console.log("No one");
  console.log(solution([1, 2, 3, 4, 2, 4, 1, 4, 21, 3, 2]));
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(ranks) {
  // write your code in JavaScript (Node.js 8.9.4)
  ranks = ranks.sort((a, b) => {
    return a - b;
  });
  let currentNum = ranks[0];
  let totalCurrentNum = 1;
  let totalAll = 0;
  for (let i = 1; i < ranks.length; i++) {
    if (ranks[i] === currentNum) {
      totalCurrentNum += 1;
    } else if (ranks[i] === ranks[i - 1] + 1) {
      totalAll += totalCurrentNum;
      totalCurrentNum = 1;
      currentNum = ranks[i];
    } else {
      totalCurrentNum = 1;
      currentNum = ranks[i];
    }
  }

  return totalAll;
}

module.exports = numOne;
