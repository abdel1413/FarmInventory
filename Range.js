
function sum(ar){
    
    let sum =0;
    for(let s of ar){
        sum +=s
    }
    return sum
}
function Range(start, end){
    
    let ar =[];
    
    for (let i=start; i<= end; i++){
       ar.push(i)
       
    }
    return ar
}


let r = Range(1,10)
console.log(r)
console.log(sum(Range(1,10)))
