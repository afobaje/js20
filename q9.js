let first = 255;

function Rgb(value) {
   let val = Math.round(Math.random() * value);
   let val3=Math.round(Math.random() * value);
   let val2=Math.round(Math.random() * value);
  console.log(`rgb(${val},${val2},${val3})`);
}
Rgb(first);
