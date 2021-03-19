function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= 5; j++) {
      if (i <= n - 3) {
        line = "*****";
        break;
      }
      if ((i - n - 1) % 2 && !(j % 3)) {
        line += "A";
      } else if (!((i - n - 1) % 2) && !(j % 2)) {
        line += "A";
      } else {
        line += "*";
      }
    }
    console.log(line);
  }
}

printPattern(5);
