const readline = require("readline");

async function game() {
  let board = generareBoard(2);

  board = generateRandomNumberInBoard(board);

  //   board = generateRandomNumberInBoard(board);
  //   board = generateRandomNumberInBoard(board);
  //   board = generateRandomNumberInBoard(board);
  //   board = generateRandomNumberInBoard(board);
  while (true) {
    let input = await scanInput();
    let isInputValid = await validateInput(input);

    if (!isInputValid) {
      console.log("input invalid");
      return "wrong input";
    }
    break;
  }
}

function generareBoard(N) {
  let board = [];
  for (let i = 0; i < N; i++) {
    let singleArr = new Array(N);
    board.push(singleArr);
  }

  return board;
}

function generateRandomNumberInBoard(arr) {
    let isFull
    let x = Math.floor(Math.random() * arr.length);
    let y = Math.floor(Math.random() * arr.length);
    x, y, isFull = checkifBoardFull(arr)

  if (checkIfElementEmpty(arr, x, y)) {
    arr[x][y] = 2;
  } else if (isFull) {
    console.log("you lose");
  } else {
    generateRandomNumberInBoard(arr);
  }

  return arr;
}

function checkifBoardFull(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (!arr[i][j]) {
        return i, j, false;
      }
    }
  }
  return null, null, true;
}

function checkIfElementEmpty(arr, x, y) {
  if (arr[x][y]) {
    return false;
  }
  return true;
}

async function scanInput() {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question("Enter w or a or s or d", function (answer) {
      resolve(answer.split()[0]);
      rl.close();
    });
  });
}

async function validateInput(input) {
  let key = "";
  let inputAccepted = ["A", "a", "S", "s", "D", "d", "W", "w"];

  for (let i = 0; i <= inputAccepted.length; i++) {
    if (input !== inputAccepted[i]) {
      return false;
    }
  }
}

console.log(game());

function (arr) {

    for (i sampai arr.length){
        for (j = 1 sampai arr.length){
            if (arr[i][j]) {
                return false
            }
        }
    }

}

function (arr) {

    for (i sampai arr.length){

        for (j = 1 sampai arr.length){
            if (arr[i][j]) {
                return false
            }
        }
    }

}