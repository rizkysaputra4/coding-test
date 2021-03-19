function getMinimumBus(totalFamily, familyMembers) {
  if (totalFamily !== familyMembers.length) {
    console.log("Input must be equal with count of family");
    return;
  }

  // Sort and split family if some family have more than 4 members
  let familyMembersSorted = splitFamily(familyMembers);

  let passengerComb = [];

  while (familyMembersSorted.length) {
    let spaceLeft = 4 - familyMembersSorted[0];
    let currentBus = [familyMembersSorted[0]];
    familyMembersSorted.splice(0, 1);
    if (spaceLeft) {
      for (let i = 0; i < familyMembersSorted.length; i++) {
        if (spaceLeft - familyMembersSorted[i] >= 0) {
          currentBus.push(familyMembersSorted[i]);
          familyMembersSorted.splice(i, 1);
          break;
        }
      }
    }
    passengerComb.push(currentBus);
  }

  console.log("Minimum bus required is: ", passengerComb.length);
}

// splitFamily is splitting family if have more than 4 members
function splitFamily(totalFamilyMember) {
  let res = [];

  totalFamilyMember.forEach((el) => {
    if (el > 4) {
      res.push(...Array(Math.floor(el / 4)).fill(4));
      res.push(el % 4);
    } else {
      res.push(el);
    }
  });

  return res.sort((a, b) => b - a);
}

getMinimumBus(5, [1, 2, 4, 3, 3]);
getMinimumBus(8, [2, 3, 4, 4, 2, 1, 3, 1]);
getMinimumBus(5, [1, 5]);
