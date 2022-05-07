function Tax(value) {
  if (value < 50000) {
    console.log(0.05 * value);
  } else if (value < 200000) {
    console.log(0.1 * value);
  } else if (value > 201000) {
    console.log(0.15 * value);
  }
}

Tax(499999)