function EvenOddRecursive(number) {
  if (number === 0) {
    return true;
  } else if (number === 1) {
    return false;
  } else if (number % 2 === 0) {
    return true;
  } else if (number < 0) {
    return EvenOddRecursive(-number);
  } else return EvenOddRecursive(number - 2);
}

console.log(EvenOddRecursive(50));
console.log(EvenOddRecursive(75));
console.log(EvenOddRecursive(-1));
