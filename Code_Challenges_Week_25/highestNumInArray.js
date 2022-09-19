/*

Instructions:

Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

*/

function highestRank(arr){
    const OCCURENCE_INCREMENTER = 1;
    const ONE_OCCURENCE = 1;
    let numOfOccurences = new Map();
    arr.forEach(num => {
      if (!numOfOccurences.get(num)) {
        numOfOccurences.set(num, ONE_OCCURENCE);
      } else {
        const currentOccurences = numOfOccurences.get(num);
        const totalOccurences = currentOccurences + OCCURENCE_INCREMENTER;
        numOfOccurences.set(num, totalOccurences);
      }
    });
    numOfOccurences = Array.from(numOfOccurences);
    numOfOccurences.sort((a, b) => b[1] - a[1]);
    const highestNumOfOccurences = numOfOccurences[0][1];
    const highestNumsOfOccurences = numOfOccurences.filter(array => array[1] === highestNumOfOccurences);
    if (highestNumsOfOccurences.length === 1) return highestNumsOfOccurences[0][0];
    highestNumsOfOccurences.sort((a, b) => b[0] - a[0]);
    return highestNumsOfOccurences[0][0];
  }

  //Clever solution optomized for space and time

  function highestRank(arr){
    return arr.reduce((mostFreq, curNum) => {
      const curNumFrequency = arr.filter(num => num === curNum).length;
      const curMostFreqFrequency = arr.filter(num => num === mostFreq).length;
      if (mostFreq === curNum) return (curNumFrequency >= curMostFreqFrequency) ? curNum : mostFreq;
      else if (curNumFrequency === curMostFreqFrequency) return (curNum >= mostFreq) ? curNum : mostFreq;
      else return (curNumFrequency >= curMostFreqFrequency) ? curNum : mostFreq;
    }, arr[0])
  }
/*

Tests:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample tests", function() {
  it("should test", function() {
    var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
    assert.strictEqual( highestRank(arr), 12);
  });
});

*/