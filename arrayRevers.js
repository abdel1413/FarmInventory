// let array = [1,2,3,4,5,6]
//  let newArr= []
// for(let i of array){
// (newArr.push(i))
// }
// console.log(newArr)


function revers(array){
    let rev =[]
   
    for (let i=array.length- 1; i>=0; i--){
        rev.push(array[i])
    }
    return rev
}

let rv = revers([1,3,5,6,7,9])
console.log(rv)


//reverse 2nd way using swap
//use Math.floor to round down
function reverse2(array){
    let half = (array.length/2);
    for(let i=0; i< (Math.floor(half)); i++){
        //save the loop 
        let old = array[i];
        array[i]=array[array.length -1-i]
        array[array.length-1-i] = old
    }

    return array

}
let rv2 = reverse2([1,3,5,6,7,9])
console.log(rv2)
