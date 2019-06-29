const triangles = function (sideA, sideB, sideC) {
  if ([sideA, sideB, sideC].every((side) => {
    return typeof side === "number" && side >= 0;
  })) {
    if (sideA === sideB && sideB === sideC) {
      console.log(`A triangle with lengths ${sideA}, ${sideB}, and ${sideC} is equilateral.`);
    } else if (sideA > sideB + sideC || sideB > sideA + sideC || sideC > sideA + sideB) {
      console.log(`A triangle with lengths ${sideA}, ${sideB}, and ${sideC} is impossible.`);
    } else if (sideA === sideB || sideB === sideC) {
      console.log(`A triangle with lengths ${sideA}, ${sideB}, and ${sideC} is isosceles.`);
    } else {
      console.log(`A triangle with lengths ${sideA}, ${sideB}, and ${sideC} is irregular.`);
    }
  } else {
    console.log("Some or all of your side lengths are not positive numbers. Please enter valid side lengths.");
  }
}


if (process.argv.length > 4) {
  triangles(parseInt(process.argv[2]), parseInt(process.argv[3]), parseInt(process.argv[4]));
} else {
  console.log("Welcome to the triangle analyser. To determine the type of a triangle, run this program with the lengths of each side of your triangle as arguments.");
  console.log("For example, to check an equilateral triangle, you might run \"node triangles.js 30 30 30\".");
}
