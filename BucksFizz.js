for (let i = 1; i < 101; i++) {
  if (i % 15 === 0) {
    console.log("BucksFizz");
  } else if (i % 3 === 0) {
    console.log("Bucks");
  } else if (i % 5 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
