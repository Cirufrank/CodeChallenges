/*
03/17/2022

Problem: create a function that returns each character separated by a hyphen, 
and each character will be repeated that amount of time of its position
Additionally, each character will begin with a capitzlized verion of itself

Example: accum("dfdfdad") // => "D-Ff-Ddd-Ffff-Ddddd-Aaaaaa-Ddddddd"

Data structures: Takes in a string, splits the

sting into an Array, and returns a string

Alogrithm: 

Iteate through each character and concatenate the current 
character to the string repeated its position number of times
*/

function accum(s) {
	let arrayOfCharacters = s.split("");
  let stringCode = "";
  
  for (let i = 0; i < arrayOfCharacters.length; i += 1) {
    let counter = i + 1;
    let currentCharacter = arrayOfCharacters[i].toLowerCase();
    while (counter !== 0) {
      if (counter === (i + 1) && (counter === 1)) {
        stringCode += `${currentCharacter.toUpperCase()}`
      } else if (counter === (i + 1)) {
        stringCode += `-${currentCharacter.toUpperCase()}`
      } else {
        stringCode += currentCharacter;
      } 
      
      counter -= 1;
    } 
  }
  
  return stringCode;
}