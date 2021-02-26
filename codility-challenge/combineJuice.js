// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(juice, capacity) {
  // write your code in JavaScript (Node.js 8.9.4)

  let newCapacity = capacity;
  newCapacity.sort((a, b) => {
    return b - a;
  });
  let sumJuice = juice.reduce((a, b) => a + b, 0);

  if (newCapacity[0] >= sumJuice) {
    return juice.length;
  }

  let combine = juice.map((val, index) => {
    let spaceLeftInGlass = capacity[index] - val;
    let arr = [val, capacity[index], spaceLeftInGlass];
    return arr;
  });

  combine.sort((a, b) => {
    return b[2] - a[2] || b[1] - a[1];
  });

  let biggestSpace = combine[0][2];

  combine.splice(0, 1);
  combine.sort((a, b) => {
    return a[0] - b[0];
  });

  let maxMix = 1;

  for (let i = 0; i < combine.length; i++) {
    biggestSpace -= combine[i][0];

    if (biggestSpace < 0) {
      return maxMix;
    }
    maxMix++;
  }
}

/*

Rick is really fond of fruit juices, but he is bored of their traditional flavours. Therefore, he has decided to mix as many of them as possible to obtain something entirely new as a result.

He has N glasses, numbered from 0 to N-1, each containing a different kind of juice. The J-th glass has capacity[J] units of capacity and contains juice[J] units of juice. In each glass there is at least one unit of juice.

Rick want to create a multivitamin mix in one of the glasses. He is going to do it by pouring juice from several other glasses into the chosen one. Each of the used glasses must be empty at the end (all of the juice from each glass has to be poured out).

What is the maximum number of flavours that Rick can mix?

Write a function:

function solution(juice, capacity);

that, given arrays juice and capacity, both of size N, returns the maximum number of flavours that Rick can mix in a single glass.

Examples:

1. Given juice = [10, 2, 1, 1] and capacity = [10, 3, 2, 2], your function should return 2. Rick can pour juice from the 3rd glass into the 2nd one.

2. Given juice = [1, 2, 3, 4] and capacity = [3, 6, 4, 4], your function should return 3. Rick can pour juice from the 0th and 2nd glasses into the 1st one.

3. Given juice = [2, 3] and capacity = [3, 4], your function should return 1. No matter which glass he chooses, Rick cannot pour juice from the other one into it. The maximum number of flavours in the chosen glass is 1.

4. Given juice = [1, 1, 5] and capacity = [6, 5, 8], your function should return 3. Rick can mix all juices in the 2nd glass.

Write an efficient algorithm for the following assumptions:

    N is an integer within the range [2..100,000];
    each element of arrays juice, capacity is an integer within the range [1..1,000,000,000];
    arrays juice and capacity have the same length, equal to N;
    for each J juice[J] ≤ capacity[J].

    
Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

*/
