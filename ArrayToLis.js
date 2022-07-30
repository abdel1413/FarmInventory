function ArrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}
export default ArrayToList;

console.log(ArrayToLis([10, 10]));
