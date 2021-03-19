/*
 * Complete the 'maxXor' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER lo
 *  2. INTEGER hi
 *  3. INTEGER k
 */

function maxXor(lo, hi, k) {
  // Write your code here
  let res = 0;
  for (let i = lo; i < hi; i++) {
    for (let j = lo + 1; j <= hi; j++) {
      let xorRes = i ^ j;
      if (xorRes > res && xorRes <= k) {
        res = xorRes;
      }
    }
  }

  return res;
}
