function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}

function blackBox(num) {
  if (isEven(num)) {
    console.log(`The exponential of ${num} is ${exponential(num)}.`);
  }
}

for (let num = 5; num <= 20; num++) {
  blackBox(num);
}
// 5-20

let num = 5
while (num <= 20) {
  blackBox(num);
  num++;
}


// console.log(`The exponential of ${num} is ${exponential(num)}.`);