function quicksort(N, p1, p2) {
  if (p1 < p2) {
    let pivot = sorting(N, p1, p2);

    quicksort(N, p1, p2 - pivot);
    quicksort(N, p1 + pivot, p2);
  }
  return N;
}

function sorting(N, p1, p2) {
  let pivot = N.length;
  while (p2 < pivot) {
    if (N[pivot] > N[p2]) {
      p1++;
      switchElem(N, p1, p2);
    }

    p2++;
  }

  p1++;
  switchElem(N, p1, pivot);

  return p1;
}

function switchElem(N, v1, v2) {
  let buffer = N[v1];
  N[v1] = N[v2];
  N[v2] = buffer;
}

function aa(N) {
  return quicksort(N, -1, N.length - 1);
}

// 1    2   3   4   5   6

console.log(aa([1, 3, 5, 2, 5, 6, 7, 2, 3]));
