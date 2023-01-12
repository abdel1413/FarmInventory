/* 
It defines a function, wrapValue, that creates a local binding.
 It then returns a function that accesses and returns this local binding.

  A function that references bindings from local scopes 
  around it is called a closure.or (the ability for a function to 
    acces, read or modify the free or independent biding from 
    outside ) 
  

*/

function WrapValue(n) {
  let local = n; //local binding
  return () => local; //fnc return that local binding
}

let wrap1 = WrapValue(1);
console.log(wrap1); //will return a local fcn
console.log(wrap1()); //will return a local value

let wrap2 = WrapValue(7);
console.log(wrap2());

function Multiplier(arg) {
  return (nb) => nb * arg;
}

let n = Multiplier(5); //Multiplier is called with 5 and store in n,
console.log(n(3)); //now n remember the value 5 stored in it and multiplie it by 3

function square(n) {
  let outsideBiding = 4;
  function inner() {
    return outsideBiding * n;
  }
  return inner;
}
console.log(square(2)()); //8

/* NOTE:
 When called, the function body sees the environment in 
 which it was created, not the environment in which it is called.*/
