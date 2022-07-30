const pw = function(base, exponent){
    let result = 1;
    for (let i=0; i< exponent; i++){
         result *= base
    }
    return result;
}

let p = pw(2,2)
console.log(p)
/////////
let n = 10;
const  halve = function(n){
    return n/2;
}

let hal = halve(100);
console.log(hal)
console.log(n)
////////