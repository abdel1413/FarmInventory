//String has also slice() and indexOf()
console.log("coconuts".slice(3, 6));
//IndexOf(argm) may be used to search form more than one elt
console.log("one two three ".indexOf("u"));

pardStart(length, paddingChar); // exp 006 -> padStart(6,"0")

//String has split
let sentence = " we are here to work hard to become future leaders";
console.log(sentence.split(" "));

//Join()
sentence.join(".");

//String has repeat(parm) //nb of sequce to repeat
sentence.repeat(3);

//access char in string is same as in array
sentence[3];

// The rest Param or spread
function max(...numbers) {
  let result = -Infinity;
  for (let n of numbers) {
    if (n > result) {
      result = n;
    }
  }
  return result;
}

let m = max(2, 3, 4, -9);
console.log(m);

//we can use spread in array as well
let nb = [1, 2, 3, 4, 5, 6];
console.log(...nb);

//JSON
let str = JSON.stringify({ squerl: false, event: ["weekend"] });

console.log(str);

JSON.parse(str);
console.log(str);
