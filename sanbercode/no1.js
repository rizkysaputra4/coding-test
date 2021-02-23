const charSequence = (n = 1) => {
  if (n < 1) {
    return "input must be higher than 0";
  } else {
    for (i = 0; i < n; i++) {
      var result = [];
      for (j = 0; j < i + 1; j++) {
        resMod = j % 3;
        if (resMod === 0) {
          result += "*";
        } else if (resMod === 1) {
          result += "#";
        } else {
          result += "%";
        }
      }
      console.log(result);
    }
  }
};

charSequence((n = 20));
