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

console.log(countChar("power of javaScript", "a"));
