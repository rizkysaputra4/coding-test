/*
 * Complete the 'maxDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY px as parameter.
 */

function maxDifference(px) {
  // Write your code here
  let i = px.length - 1;
  let j = i - 1;
  let diff = 0;
  let diffArr = [];
  let val = 0;

  while (i >= 0) {
    j = i - 1;
    while (j >= 0) {
      diff = px[i] - px[j];

      if (diff > 0 && diff > val) {
        diffArr.push(diff);
        val = diff;
      }

      j--;
    }

    i--;
  }
  console.log(val);
  if (!diffArr || !diffArr.length) {
    return -1;
  }

  diffArr = diffArr.sort((a, b) => {
    return a - b;
  });

  diffArr = diffArr.reverse();

  return diffArr[0];
}

//console.log(maxDifference([4, 4, 4, 4, 5, 3, 21, 2, 3, 5]));

//console.log(maxDifference([9, 8, 7, 6, 5, 3]));

function verTwo(arr) {
  let lowest = arr[0];
  let highest = lowest;
  let highestDif = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < lowest) {
      lowest = arr[i];
      highest = lowest;
    }

    if (arr[i] > highest) {
      highest = arr[i];
    }

    let val = highest - lowest;
    if (val > highestDif) {
      highestDif = val;
    }
  }

  if (!highestDif) {
    return -1;
  }

  return highestDif;
}

console.log("ver 2: ", verTwo([5, 10, 12, 4, 9, 10, 12, 1, 10]));
