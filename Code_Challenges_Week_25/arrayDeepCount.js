/*

Instructions:

Array.prototype.length will give you the number of top-level elements in an array.

Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.

For example:

deepCount([1, 2, 3]);  
//>>>>> 3
deepCount(["x", "y", ["z"]]);  
//>>>>> 4
deepCount([1, 2, [3, 4, [5]]]);  
//>>>>> 7
The input will always be an array.

*/

function deepCount(array, totalElements){
    const currentCount = array.length;
     let nestedArrays = array.filter(element => Array.isArray(element));
     nestedArrays = nestedArrays.map(arr => arr.slice());
     totalElements = currentCount;
     nestedArrays.forEach((arr, index) => {
       if (index !== 0) {
         nestedArrays[0].push(arr);
         nestedArrays.splice(index, 1);
       }
     })
     if (nestedArrays.length === 0) return currentCount;
     nestedArrays = nestedArrays[0]
     return totalElements + deepCount(nestedArrays, totalElements)
   }
   //Best Recursive Solution
   
   function deepCount(array){
    let count = array.length;
   
     for (element of array) {
       if (Array.isArray(element)) {
         count += deepCount(element);
       }
     }
     return count;
   }

   //Updated Recursion solution

   function deepCount(array) {
    let count = 0;
    
    count += array.length;
    const nestedArrays = array.filter(element => Array.isArray(element));
    
    if (nestedArrays.length > 0) {
        for (const element of nestedArrays) {
          count += deepCount(element);
      }
    }
    
    return count;
    
  }

  //Updated Stack Example

  function deepCount(array) {
    let count = 0;
    
    const stack = [...array];
    let currentElement = stack.pop();
    while(currentElement) {
      count += 1;
      if (Array.isArray(currentElement)) {
        stack.push(...currentElement);
      }
      currentElement = stack.pop();
    }
    return count;
  }

/*

Tests:

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(deepCount([]), 0, "Expected 0")
Test.assertEquals(deepCount([1, 2, 3]), 3, "Expected 3")
Test.assertEquals(deepCount(["x", "y", ["z"]]), 4, "Expected 4")
Test.assertEquals(deepCount([1, 2, [3, 4, [5]]]), 7, "Expected 7")
Test.assertEquals(deepCount([[[[[[[[[]]]]]]]]]), 8, "Expected 8")
  });
});

*/