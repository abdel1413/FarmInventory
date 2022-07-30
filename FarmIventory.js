//first way to write farm inventory
//create  each function  based on the number of animals
//provided

//NOTE: IT IS NOT EFFICIENT THOUGH IT WORKS

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

//Instead of passing all the animals into one function,
//what if we pass name of animal and its given numbe?
function Converter(number, label) {
  let string = String(number);
  while (string.length < 3) {
    string = "0" + string;
  }
  console.log(`${string} ${label}`);
}

//function that calls converter function

function Inventory2(animal1, animal2, animal3) {
  Converter(animal1, "Caws");
  Converter(animal2, "Pigs");
  Converter(animal3, "Birds");
}

console.log(Inventory2(7, 5, 9));
//another way
//create two functions one where we check
//the number if it is less than 3 digit. If so, then add 0 in front
//The other function recieve that names of animals and
//call the first function passing name and the comparing number digit

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
