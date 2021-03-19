function series(n) {
  let res = [7];
  let num = 8;

  for (let i = 0; i < n - 1; i++) {
    res.push(res[i] + num);
    num += num;
  }
  return res;
}

console.log(series(5));
