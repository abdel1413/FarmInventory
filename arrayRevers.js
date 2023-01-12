// 1st way:
//create a new empty array,
//loop thru the array in reverse way;
// push each elt in to new array
//return the new array

function revers(array) {
  let rev = [];

  for (let i = array.length - 1; i >= 0; i--) {
    rev.push(array[i]);
  }
  return rev;
}

let rv = revers([1, 3, 5, 6, 7, 9]);
console.log(rv);

//reverse 2nd way using swap
// divide the array into half (use Math.floor to round down)
// loop thru the half array
// creat a temporary binding to hold the first elt
// assign that 1st elt to hold the last elt of array - i(index of iter)
// assign the last elt to the temporary value
function reverse2(array) {
  let half = array.length / 2;
  for (let i = 0; i < Math.floor(half); i++) {
    //save the loop
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }

  return array;
}
let rv2 = reverse2([1, 3, 5, 6, 7, 9]);
console.log(rv2);

//3rd way
//Just use the predifined function revers() by javascript
let array = [1, 2, 3, 4, 5];
array.reverse();
