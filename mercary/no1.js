/*
 * Complete the 'arraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY numbers as parameter.
 */

function arraySum(numbers) {
  // Write your code here
  let res = 0;

  numbers.map((num) => {
    res += num;
  });

  return res;
}
