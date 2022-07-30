function DeepEqaul(a,b){
    if(a === b){
        return true;
    }

    //check their typeOF
    if((a == null)|| typeof(a) != "object" ||
    (b == null) || typeof(b) != "object"){
        return false;
    }

    //use  Object.keys to go over properties
    //in order to check if both Objects have same names
    //and if these properties have identical values
    
    let keyA = Object.keys(a), keyB = Object.keys(b)

    //1 check length
    if(keyA.length != keyB.length){
        return false;
    }

    //2  loop to check properties
    for(let key of keyA){
        if(!keyB.includes(key) || !DeepEqaul(a[key],b[key])){
            return false;
        }
    }

    return true;
    
}

 let obj = {here: {is: "an"}, object: 2};
 let obj2 = {here: {is: "an"}, object: 2};
 console.log(DeepEqaul(obj,obj2)) //true
 console.log(DeepEqaul(obj,{here:1, object:2})) //false
 console.log(DeepEqaul(obj, {here:{is:'an'}, object:2}))