/*

Instructions:

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

 */


function toCamelCase(str = "theStealthWarrior"){
    let arrayOfCharacters = str.split("");
    
    if (arrayOfCharacters.length === 0) {
      return "";
    } else if (arrayOfCharacters.includes("-")) {
      let filteredArray = str.split("-").filter(word => word !== '-');
        return filteredArray.map((word, index) => {
      if (index === 0) {
        return word;
      } else if (index !== 0) {
        return word[0].toUpperCase().concat(word.slice(1));
      }
    }).join("");
    } else if (arrayOfCharacters.includes("_")) {
      let filteredArray = str.split("_").filter(word => word !== '_');
       return filteredArray.map((word, index) => {
      if (index === 0) {
        return word;
      } else if (index !== 0) {
        return word[0].toUpperCase().concat(word.slice(1));
      }
    }).join("");
    } else {
      return str;
    }
    
  }
  /*

  Tests:

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
Test.assertEquals(toCamelCase(), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")

});
});
 */