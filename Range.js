//at each index, add the corresponding element to sum
//then return the total
function sum(ar) {
  let sum = 0;
  for (let s of ar) {
    sum += s;
  }
  return sum;
}

//loop thru a range of numbers then put each element
// at each index into an array ar
function Range(start, end) {
  let ar = [];

  for (let i = start; i <= end; i++) {
    ar.push(i);
  }
  return ar;
}

let r = Range(1, 10);
console.log(r);
console.log(sum(Range(1, 10)));
