// age.js

let ageCategory = ["infant", "toddler", "child", "preteen", "teen", "young adult"];
let age = 17;
if (age < 2) {
  console.log("You are an " + ageCategory[0] + "!");
} else if (age < 5) {
  console.log("You are a " + ageCategory[1] + "!");
} else if (age < 10) {
  console.log("You are a " + ageCategory[2] + "!");
} else if (age < 13) {
  console.log("You are a " + ageCategory[3] + "!");
} else if (age < 18) {
  console.log("You are a " + ageCategory[4] + "!");
} else if (age < 21) {
  console.log("You are a " + ageCategory[5] + "!");
} else {
  console.log("You are too old for this game!");
}

// pluralizer.js
let thing = 'dog';
let count = 4;

if (count === 1) {
console.log("There is " + count + " " + thing + "."); }
else {
  console.log("There are " + count + " " + thing + "s" + ".")
}

//tempConvert.js
let F = 85;
let fC = (F - 32 * (5/9));
console.log(F + " degrees Fahrenheit is " + fC + " degrees Celsius.");
let fK = (((F-32) * (5/9)) + 273.15);
console.log(F + " degrees Fahrenheit is " + fK + " degrees Kelvin.");

//larger.js
let numOne = 353;
let numTwo = 242;

if (numOne > numTwo) {
  console.log("The larger number of " + numOne + " and " + numTwo + " is " + numOne + ".");
} else if (numTwo > numOne) {
    console.log("The larger number of " + numTwo + " and " + numOne + " is " + numTwo + ".");
} else {
  console.log("The numbers are the same value.")
}

//translator.js
let en = "Hello world";
let es = "Hola mundo"
let fr = "Bonjour le monde";

let translateEnToEs = ('"' + en + '"' + " in Spanish is " + '"' + es + '."');
let translateEnToFr = ('"' + en + '"' + " in French is " + '"' + fr + '."');
let translateEsToEn = ('"' + es + '"' + " in English is " + '"' + en + '."');
let translateEsToFr = ('"' + es + '"' + " in French is " + '"' + fr + '."');
let translateFrToEn = ('"' + fr + '"' + " in English is " + '"' + en + '."');
let translateFrToEs = ('"' + fr + '"' + " in Spanish is " + '"' + es + '."');
console.log(translateFrToEs);

//Comparing Arrays

const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 3, 6];

let n = 0;
while (n < arr1.length) {
  if (arr1[n] === arr3[n]) {
  console.log("array1 value " + arr1[n] + " equals array2 value " + arr2[n] + "!"); } else {
    console.log("The array values don't match.")
  }
  n++;
}

//Bonus
const ageCategories = ["infant", "toddler", "child", "preteen", "teen", "young adult"];
let age = 21;

  switch(age) {
    case 0:  case 1:
      console.log("You are an " + ageCategories[0] + "!");
      break;
    case 2:  case 3:  case 4:
      console.log("You are a " + ageCategories[1] + "!");
      break;
    case 5:  case 6:  case 7:  case 8:  case 9:
      console.log("You are a " + ageCategories[2] + "!");
      break;
    case 10:  case 11:  case 12:
      console.log("You are a " + ageCategories[3] + "!");
      break;
    case 13:  case 14:  case 15:  case 16:  case 17:
      console.log("You are a " + ageCategories[4] + "!");
      break;
    case 18: case 19: case 20:
      console.log("You are a " + ageCategories[5] + "!");
      break;
    default: 
      console.log("You're too old for this game.");
      break;
  } 
