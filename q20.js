function LoveCalculator(fname, sname) {
  let calculate = [...fname, ..."loves", ...sname];
  let h, i, j;
  h = calculate.map((v) => {
    return calculate.filter((m) => m === v);
  });
  i = h.map((v) => v.length);
  j = i.reduce((a, b) => a + b);
  console.log(j);
}

LoveCalculator("Ajirotutu", "Ajanlekoko");
