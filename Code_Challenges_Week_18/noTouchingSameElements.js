/*

Instrucitons:

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

const uniqueInOrder=function(iterable){
    if (typeof iterable === 'string') iterable = iterable.split("");
    if (iterable.length === 0) return [];

    let queue = [];
    let result = [];
    queue.push(iterable[0]);
    result.push(iterable[0])
    
    for (let index = 1; index < iterable.length; index += 1) {
      let comparisonElement = queue.shift();
      let currentElement = iterable[index];
      if (currentElement === comparisonElement) {
        queue.push(comparisonElement);
      } else {
        result.push(currentElement);
        queue.push(currentElement)
      }
    }
    
    return result;
}

const uniqueInOrder=function(iterable){
    if (typeof iterable === 'string') iterable = iterable.split("");
    if (iterable.length === 0) return [];
    let result = [iterable[0]];
    let comparisonElement = iterable[0];
     for (let index = 1; index < iterable.length; index += 1) {
       let currentElement = iterable[index];
      if (currentElement !== comparisonElement) {
        result.push(currentElement);
        comparisonElement = currentElement
      }
    }
    
    return result;
}

/*

Tests:

describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
  });
});

*/