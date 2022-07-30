let array = [];

function ArrayFunction(task){

    return array.push(task)

}


function getTask(){
    return array.pop() // remove  and return the last  elt
}

function addToFront(task){
    array.unshift(task) //  add in front
}

function RemoveFromFront(){
    return array.shift() //remove from the start
}


console.log([1,2,3,4,5,3,3,5,8].indexOf(3)) //to get index of first occurence 
console.log([2,1,2,3,4,5,8].lastIndexOf(2))//last occurence

//note both have 2nd optional param indicatg where to start searching

console.log([0,8,3,2,1,3,5,4,3,9].slice(2,5)) //takes 2 param start indx and end indx
//NOTE: start indx is inclusive while end indx is exclusive

function removeElement(array, index){
    return array.slice(0,index).concat(array.slice(index+1))
}

console.log(removeElement([2,3,4,5,6,9],2))
//NOTE: use array.slice(start,end).concat(array.slice(end+1))
//if you want to remove item inside an array