/*
 * Complete the 'fourthBit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER number as parameter.
 */

function fourthBit(number) {
  // Write your code here
  let binary = Number(number).toString(2).split("");

  return binary[binary.length - 4];
}
