function separateLetter(word) {
  word = word.replace(/ /g, "").toLowerCase().split("");

  let vowel = ["a", "i", "u", "e", "o"];
  let vowelChar = {},
    consonantChar = {};
  word.forEach((el) => {
    if (vowel.includes(el)) {
      typeof vowelChar[el] === "undefined"
        ? (vowelChar[el] = el)
        : (vowelChar[el] += el);
    } else {
      typeof consonantChar[el] === "undefined"
        ? (consonantChar[el] = el)
        : (consonantChar[el] += el);
    }
  });
  console.log("Vowel Character:", Object.values(vowelChar).join(""));
  console.log("Consonant Character: ", Object.values(consonantChar).join(""));
}

separateLetter("fdjlksa fdalj gdsafe");
separateLetter("Sample Case");
separateLetter("Next Case");
