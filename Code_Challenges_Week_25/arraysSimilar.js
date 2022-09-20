/*

Instructions:

Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

const arr1 = [1, 2, 2, 3, 4],
      arr2 = [2, 1, 2, 4, 3],
      arr3 = [1, 2, 3, 4],
      arr4 = [1, 2, 3, "4"]

arraysSimilar(arr1, arr2); // Should equal true
arraysSimilar(arr2, arr3); // Should equal false
arraysSimilar(arr3, arr4); // Should equal false

*/

function arraysSimilar(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    const mapOfTypes = new Map();
    while(arr1.length > 0) {
      const currentElement = arr1[0];
      const elementsOfSameVal = arr1.filter(element => element === currentElement).length;
      mapOfTypes.set(currentElement, elementsOfSameVal);
      arr1 = arr1.filter(element => element !== currentElement);
    }
    while (arr2.length > 0) {
      const currentElement = arr2[0];
      const elementsOfSameVal = arr2.filter(element => element === currentElement).length;
      if (!mapOfTypes.get(currentElement) || mapOfTypes.get(currentElement) !== elementsOfSameVal) return false;
      arr2 = arr2.filter(element => element !== currentElement);
    }
    return true;
  }

/*

Tests:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example Tests", () => {
  const arr1 = [1, 2, 2, 3, 4],
        arr2 = [2, 1, 2, 4, 3],
        arr3 = [1, 2, 3, 4],
        arr4 = [1, 2, 3, "4"]
  
	it("Should return true for similar arrays", () => {
		assert.isTrue(arraysSimilar(arr1, arr2));
	});
  it("Should return false for different arrays", () => {
		assert.isFalse(arraysSimilar(arr2, arr3));
		assert.isFalse(arraysSimilar(arr3, arr4));
  })
});

*/
