// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
  // write your code in JavaScript (Node.js 8.9.4)
  let largestNum = Math.max(...H);
  let largestNumEl = [];
  let midIndex = Math.floor(H.length / 2);
  H.map((val, index) => {
    if (val === largestNum) {
      largestNumEl.push(index);
    }
  });

  let leftIndexTallestClosestToMid = largestNumEl[0];
  let rightIndexTallestClosestToMid = largestNumEl[largestNumEl.length - 1];

  let leftArr = H.slice(0, leftIndexTallestClosestToMid);
  let rightArr = H.slice(rightIndexTallestClosestToMid + 1, H.length + 1);

  let secondTallestInRight = Math.max(...rightArr);
  let secondTallestInLeft = Math.max(...leftArr);

  if (rightArr.length === 0) {
    secondTallestInRight = largestNum;
  }

  if (leftArr.length === 0) {
    secondTallestInLeft = largestNum;
  }

  let spaceUncoveredInRight =
    (largestNum - secondTallestInRight) * rightArr.length;
  let spaceUncoveredInLeft =
    (largestNum - secondTallestInLeft) * leftArr.length;

  let res = null;
  if (spaceUncoveredInLeft > spaceUncoveredInRight) {
    res = largestNum * H.length - spaceUncoveredInLeft;
  } else {
    res = largestNum * H.length - spaceUncoveredInRight;
  }
  //  console.log(res, largestNum, H.length, spaceUncoveredInRight, spaceUncoveredInLeft, rightArr.length, secondTallestInRight, rightArr)
  return res;
}

// function solution(H) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   let arr = H.slice();
//   let biggestNum = arr.sort((a, b) => {
//     return b - a;
//   })[0];
//   let smallestBanner = biggestNum * H.length;
//   for (let i = 0; i < H.length; i++) {
//     let arr1 = H.slice(0, i);
//     let arr2 = H.slice(i);
//     let biggestNuminArr1 = arr1.sort((a, b) => {
//       return b - a;
//     })[0];
//     let biggestNuminArr2 = arr2.sort((a, b) => {
//       return b - a;
//     })[0];
//     if (!biggestNuminArr1) {
//       biggestNuminArr1 = 0;
//     }
//     let arr1Size = biggestNuminArr1 * arr1.length;
//     let arr2Size = biggestNuminArr2 * arr2.length;

//     let totalSize = arr1Size + arr2Size;
//     if (smallestBanner > totalSize) {
//       smallestBanner = totalSize;
//     }
//   }

//   return smallestBanner;
// }

console.log(solution([1, 2, 3, 4, 214, 21, 42, 1, 1]));

let N = 1000000;
let test = new Array(N);

for (let i = 1; i <= N; i++) {
  test[i - 1] = i;
}

for (let i = 0; i <= N; i++) {
  let j = Math.floor(Math.random() * N);
  let k = Math.floor(Math.random() * N);
  let buffer = test[j];
  test[j] = test[k];
  test[k] = buffer;
}

let missing = Math.floor(Math.random() * N);
console.log(test[missing]);
test.splice(missing, 1);

console.log(solution([1, 7, 7, 3, 6]));

/*

There are N rectangular buildings standing along the road next to each other. The K-th building is of size H[K] × 1.

Because a renovation of all of the buildings is planned, we want to cover them with rectangular banners until the renovations are finished. Of course, to cover a building, the banner has to be at least as high as the building. We can cover more than one building with a banner if it is wider than 1.

For example, to cover buildings of heights 3, 1, 4 we could use a banner of size 4×3 (i.e. of height 4 and width 3), marked here in blue:

Buildings of sizes (3 × 1), (1 × 1), (4 × 1), covered with scaffolding of size 4×3

We can order at most two banners and we want to cover all of the buildings. Also, we want to minimize the amount of material needed to produce the banners.

What is the minimum total area of at most two banners which cover all of the buildings?

Write a function:

function solution(H);

that, given an array H consisting of N integers, returns the minimum total area of at most two banners that we will have to order.

Examples:

1. Given H = [3, 1, 4], the function should return 10. The result can be achieved by covering the first two buildings with a banner of size 3×2 and the third building with a banner of size 4×1:

Illustration of first example

2. Given H = [5, 3, 2, 4], the function should return 17. The result can be achieved by covering the first building with a banner of size 5×1 and the other buildings with a banner of size 4×3:

Illustration of second example

3. Given H = [5, 3, 5, 2, 1], your function should return 19. The result can be achieved by covering the first three buildings with a banner of size 5×3 and the other two with a banner of size 2×2:

Illustration of third example

4. Given H = [7, 7, 3, 7, 7], your function should return 35. The result can be achieved by using one banner of size 7×5:

Illustration of fourth example

5. Given H = [1, 1, 7, 6, 6, 6], your function should return 30. The result can be achieved by using banners of size 1×2 and 7×4:

Illustration of fifth example

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array H is an integer within the range [1..10,000].

*/
