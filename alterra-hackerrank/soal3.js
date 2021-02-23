/*
 * Complete the 'firstOccurrence' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING x
 */

function firstOccurrence(s, x) {
  // Write your code here
  s = s.split("");
  x = x.split("");
  let i = 0;
  let isMatch = false;

  for (i = 0; i <= s.length - x.length; i++) {
    let isMatchFullWord = false;
    for (var j = 0; j < x.length; j++) {
      if (x[j] === "*") {
        x[j] = s[i + j];
      }

      isMatch = x[j] === s[i + j];

      if (!isMatch) {
        break;
      }

      if (j === x.length - 1 && isMatch) {
        isMatchFullWord = true;
      }
    }

    if (isMatchFullWord) {
      return i;
    }

    if (i === s.length - x.length) {
      return -1;
    }
  }

  // let firstIndex = s.map((sLetter, sIndex) => {
  //     match = x.map((xLetter, xIndex) => {
  //         if (xLetter === '*') {
  //             xLetter = s[sIndex + xIndex]

  //         }
  //         isMatch = xLetter === s[sIndex + xIndex]

  //         if (!isMatch) {
  //             return false
  //         }

  //         return true
  //     })

  //     const isTrue = (val) => true
  //     const matchs = match.every(isTrue)

  //     if (matchs) {
  //         console.log(match)

  //         return sIndex
  //     }
  // })

  // return firstIndex.filter(data => {
  //     return data != null

  // })[0]
}

console.log(firstOccurrence("djshafkljdhsakjhdalsjfdlaj", "sak"));
