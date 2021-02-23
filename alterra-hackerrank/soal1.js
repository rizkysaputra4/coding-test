/*
 * Complete the 'minimizeBias' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ratings as parameter.
 */

function minimizeBias(ratings) {
  // Write your code here

  ratings = ratings.sort((a, b) => {
    return a - b;
  });
  var i = 0;
  var bias = 0;

  while (i < ratings.length) {
    bias += ratings[i + 1] - ratings[i];

    i += 2;
  }
  return bias;
}

console.log(minimizeBias([2, 3, 21, 3, 4, 3, 2, 4, 4, 2]));
