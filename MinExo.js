function Min(a, b) {
  if (a < b) {
    console.log(`the min number is ${a}`);
  } else if (a > b) {
    console.log(`the min number is ${b}`);
  } else if (a === b) {
    console.log(` no min, ${a} and ${b} are equal`);
  }
}

Min(10, -10);

function countB(st) {
  return countChar(st, "B");
}

function countChar(string, ch) {
  let c = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ch) {
      c += 1;
    }
  }
  return c;
}

console.log(countChar("power of javaScript", a));
