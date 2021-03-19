function triangleSeries(n) {
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = n; j > 0; j--) {
      if (j > n - i) {
        line += " ";
      } else {
        line += j;
      }
    }
    console.log(line);
  }
}

triangleSeries(5);
