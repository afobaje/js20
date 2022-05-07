// let collections = ["umbrella", "nicodemus", "microbiosis"];
// let random = collections[Math.round(Math.random() * collections.length)];
// console.log(random)

function RandomValues(value,val, user, output) {
  let random = value[Math.round(Math.random() * value.length)];

  // output= random;
  console.log(random)

  
  let reverse = [...random].reverse().join();

  if (val === reverse) {
    console.log("youre doing well");
  } else {
    console.log("wrong value");
  }
}
