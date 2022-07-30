
import ArrayToLis from "./ArrayToLis";
function ListToArray(list){
    let array =[];
    for(let node = list; node; rest = node.rest){
        array.push(node.value)
    }
    return array
}

console.log(ListToArray(ArrayToLis([19,20,30])))