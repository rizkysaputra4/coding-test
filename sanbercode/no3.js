data = [
  [1, "https://id.bitdegree.org"],
  [2, "https://finance.detik.com"],
  [3, "https://telkom.co.id"],
  [4, "https://corona.jakarta.go.id"],
];

const getSubDomain = (input = data) => {
  input.map((el) => {
    res = el[1].replace(/\.com.*|\.org.*|\.co.*|\.go.*/g, "");
    res = res.replace(/https:\/\//g, "");
    haveSubDomain = res.match(/\..*/g);
    if (haveSubDomain) {
      subDomain = res.replace(/\..*/g, "");
      el.push(subDomain);
    } else {
      el.push("null");
    }
  });
  return input;
};

console.log(getSubDomain());
