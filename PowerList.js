const pw = function (base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

let p = pw(2, 4);
console.log(p); //=> 16

//same function using recursive to output power
function recursive(base, expo) {
  if (expo === 0) {
    return 1;
  }
  return base * recursive(base, expo - 1);
}
console.log(recursive(2, 4));
//(2,4)  => base = 2 and 4= expo
// 4 === 0 no, then
//return 2 * (recursive(2, 4 - 1)=> 2 * recursive(2, 3 - 1)
// => 2 * recursive(2, 2 - 1)=> 2 * recursive(2, 1 - 1) ==> 2*2*2*2*1

/////////
let n = 10;
const halve = function (n) {
  return n / 2;
};

let hal = halve(100);
console.log(hal);
console.log(n);
////////
