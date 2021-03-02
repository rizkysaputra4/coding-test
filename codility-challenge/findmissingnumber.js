// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let left = 0;
  let right = A.length - 1;

  A = new Float64Array(A);
  A = A.sort();

  if (A[0] !== 1 || !A) {
    return 1;
  }
  if (A[right] === right + 1) {
    return right + 2;
  }

  return missingNum(A, left, right);
}

function missingNum(Arr, left, right) {
  while (true) {
    let mid = left + Math.floor((right - left) / 2);
    let correctNum = mid + 1; //Arr[left] + Math.floor((Arr[right] - 1 - Arr[left]) / 2); // 8 + (10 - 1 - 8 / 2)
    console.log(
      `CorrectNum: ${correctNum}, Left: ${left}, Right: ${right}, MidIndex: ${mid}, MidVal: ${Arr[mid]}`
    );
    if (Arr[mid] > correctNum) {
      if (Arr[mid] - Arr[mid - 1] > 1) {
        return Arr[mid] - 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (Arr[mid + 1] - Arr[mid] > 1) {
        return Arr[mid] + 1;
      } else {
        left = mid + 1;
      }
    }
  }
}

let N = 100;
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

console.log(solution(test));
