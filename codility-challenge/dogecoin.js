// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(P, T, A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  var connectArr = [];
  var peopleWithWrongToy = needChange(P, T);

  if (peopleWithWrongToy.length < 1) {
    return true;
  }

  if (peopleWithWrongToy.length % 2 !== 0) {
    return false;
  }

  if (A.length < 1 && B.length < 1) {
    return false;
  }

  var isExist = firstChainIndex(A, B, peopleWithWrongToy);

  if (isExist > -1) {
    connectArr.push(A[isExist], B[isExist]);
  } else {
    return false;
  }

  function splicing(index) {
    A.splice(index, 1);
    B.splice(index, 1);
  }

  splicing(isExist);
  let i = 0;
  while (true) {
    let ArrAConnect = connectArr.indexOf(A[i]);
    let ArrBConnect = connectArr.indexOf(B[i]);

    if (ArrAConnect > -1) {
      connectArr.push(B[i]);
      splicing(i);
      i = -1;
    } else if (ArrBConnect > -1) {
      connectArr.push(A[i]);
      splicing(i);
      i = -1;
    }

    if (i === A.length - 1 && !doubleCheck(P, T, A, B)) {
      return false;
    }

    i++;

    if (A.length === 0) {
      return true;
    }
  }
}

function doubleCheck(P, T, A, B) {
  let res = true;
  A.map((el) => {
    if (P[el] !== T[el]) {
      res = false;
    }
  });

  B.map((el) => {
    if (P[el] !== T[el]) {
      res = false;
    }
  });

  return res;
}

function needChange(P, T) {
  var withWrongToy = [];

  P.map((el, index) => {
    if (el !== T[index]) {
      withWrongToy.push(index);
    }
  });

  return withWrongToy;
}

function firstChainIndex(A, B, peopleWithWrongToy) {
  var isExist = -1;
  for (let i = 0; i < peopleWithWrongToy.length; i++) {
    isExist = A.indexOf(peopleWithWrongToy[i]);
    if (isExist > -1) {
      break;
    }
  }

  if (isExist < 0) {
    for (let i = 0; i < peopleWithWrongToy.length; i++) {
      isExist = B.indexOf(peopleWithWrongToy[i]);
      if (isExist > -1) {
        break;
      }
    }
  }

  return isExist;
}

/*

Task description
During an Animal Day event, N people (numbered from 0 to N−1) showed up. Each of them had either a dog or a cat. The organizers decided to give them a wonderful gift: a toy for each animal.

After the event, it turned out that some people who owned a dog had received a cat-toy, and some people who owned a cat received a dog-toy. People may exchange toys, but only if they know each other (otherwise they have no way to contact the other person). The pair of people can exchange toys multiple times.

Knowing who knows who, who owns which animal, and what kind of toy he or she received, can you determine whether it is possible for people to exchange toys in such a way that every dog ends up with a dog-toy and every cat gets a cat-toy?

Write a function:

function solution(P, T, A, B);

that returns true if it is possible to exchange toys in such a way that every animal receives an appropriate toy, or false otherwise. First two arrays describe the pets (array P) and toys (array T) that every person owns. The J-th person owns pet P[J] and toy T[J] (1 means dog or dog-toy and 2 means cat or cat-toy). The next two arrays, A and B, both of length M, describe the relationships between people. For each integer K from 0 to M−1, person A[K] knows person B[K].

Examples:

1. Given:

P = [1, 1, 2]
T = [2, 1, 1]
A = [0, 2]
B = [1, 1]
the function should return true. Person 0 can exchange toys with person 1 to obtain a dog-toy, and then person 1 can exchange toys with person 2.

2. Given:

P = [2, 2, 1, 1, 1]
T = [1, 1, 1, 2, 2]
A = [0, 1, 2, 3]
B = [1, 2, 0, 4]
the function should return false. There is no way for persons 3 and 4 to exchange toys with others.

3. Given:

P = [1, 1, 2, 2, 1, 1, 2, 2]
T = [1, 1, 1, 1, 2, 2, 2, 2]
A = [0, 2, 4, 6]
B = [1, 3, 5, 7]
the function should return false. There is no way for persons 2 and 3 and for persons 4 and 5 to exchange toys with others.

4. Given:

P = [2, 2, 2, 2, 1, 1, 1, 1]
T = [1, 1, 1, 1, 2, 2, 2, 2]
A = [0, 1, 2, 3, 4, 5, 6]
B = [1, 2, 3, 4, 5, 6, 7]
the function should return true.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
M is an integer within the range [0..200,000];
each element of array ('P', 'T') is an integer that can have one of the following values: 1, 2;
each element of arrays A, B is an integer within the range [0..N−1];
for each integer K from 0 to M−1, elements A[K] and B[K] are different;
there are no redundant elements in arrays A, B; more formally every unordered pair of persons a, b will appear as A[K], B[K] for at most one K.

*/
