function fibonacci(N) {
  if (N === 1 || N === 2) {
    return 1;
  }

  var currentSequence = 1;
  var sequenceBefore = 1;
  var result = 0;
  for (var i = 3; i <= N; i++) {
    result = currentSequence + sequenceBefore;
    sequenceBefore = currentSequence;
    currentSequence = result;
  }

  return result;
}

function fRecursive(N) {
  if (N < 3) {
    return 1;
  }

  return fRecursive(N - 1) + fRecursive(N - 2);
}

console.log(fibonacci(6));
console.log(fRecursive(6));

var a = { a, b, c };
var b = {};
a.map((as) => {
  b[as] = 1;
});
a.a = 10;
console.log(b);
