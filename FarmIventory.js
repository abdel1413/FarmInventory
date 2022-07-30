//first way to write farm inventory
//create  each function  based on the number of animals
//provided

function Inventory(caws, chicken) {
  //conver into string
  let cawString = String(caws);
  if (cawString.length < 3) {
    cawString = "0" + caws;
  }
  console.log(`${cawString} Cows`);

  let chickenString = String(chicken);
  if (chickenString.length < 3) {
    chickenString = "0" + chicken;
  }
  console.log(`${chickenString} Chickens`);
}

console.log(Inventory(7, 9));

function FarmIventory(name1, name2, nam3) {
  console.log(`${ZeroPadding(name1, 3)},"caws"`);
  console.log(`${ZeroPadding(name2, 3)},"lam`);
  console.log(`${ZeroPadding(nam3, 3)}, "chicken"`);
}

function ZeroPadding(num) {
  let lgth = String(num); // convert num to string;
  while (lgth.length < 3) {
    lgth = "0" + lgth; //concatinate 0 num if length < 3 digit
  }
  return lgth;
}

FarmIventory(7, 16, 30);

//another way
function zeropadd(number, width) {
  let numsString = String(number);
  while (numsString < width) {
    numsString = "0" + numsString;
  }
}

function farmInv(name, name2, name3) {}
