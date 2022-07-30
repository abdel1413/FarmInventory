import ArrayToList from "./ArrayToLis";
function ListToArray(list) {
  let array = [];
  for (let node = list; node; rest = node.rest) {
    array.push(node.value);
  }
  return array;
}

console.log(ListToArray(ArrayToList([19, 20, 30])));
