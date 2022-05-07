function SalaryRange(value) {
  if (value < 50000) {
    console.log("basic earner");
  } else if (value > 50000 && value < 200000) {
    console.log("mid earner");
  } else if (value > 200000) {
    console.log("big league");
  }
}

SalaryRange(300000);
