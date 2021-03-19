/*
 * Complete the 'cariAngka' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING persamaan as parameter.
 */

function cariAngka(persamaan) {
  let eq = persamaan.split(" ");
  let [containHash, hashIndex] = locateHash(eq);
  let findNum = eq[containHash].split("");
  findNum[hashIndex] = "0";

  let newNum = combine(findNum);

  let parseMath = {
    "+": (x, y) => {
      return x - y;
    },
    "-": (x, y) => {
      return x + y;
    },
    "/": (x, y) => {
      return x * y;
    },
    "*": (x, y) => {
      return x / y;
    },
  };

  let res = parseInt(eq[eq.length - 1]);
  for (let i = 0; i < eq.length - 2; i += 2) {
    if (i !== containHash && i > 0) {
      let num = parseInt(eq[i]);
      res = parseMath[eq[i - 1]](res, num);
    } else if (i !== containHash && i < 1) {
      let num = parseInt(eq[i]);
      res = parseMath["+"](res, num);
    }
  }

  if (Math.abs(newNum - res) > 9) {
    while (true) {
      let number = Math.abs(newNum - res) / 10;
      if (number < 10) {
        return number;
      }
    }
  }

  return Math.abs(newNum - res);
}

function locateHash(arr) {
  for (let i = 0; i < arr.length; i++) {
    let index = arr[i].indexOf("#");
    if (index > -1) {
      return [i, index];
    }
  }
}

function combine(arr) {
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }

  return res;
}

console.log(cariAngka("40 * #0 = 400"));
