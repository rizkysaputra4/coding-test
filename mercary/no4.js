/*
 * Complete the 'dnaComplement' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function dnaComplement(s) {
  // Write your code here
  let str = s.split("").reverse();

  let output = [];
  str.map((el) => {
    if (el === "A") {
      output.push("T");
    } else if (el === "T") {
      output.push("A");
    } else if (el === "C") {
      output.push("G");
    } else if (el === "G") {
      output.push("C");
    }
  });

  return output.join("");
}
