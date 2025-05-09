// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

export function getAverage(marks:number[]):number{
    const sum: number = marks.reduce((sum, mark) => sum + mark, 0)
    return Math.floor(sum/marks.length);
}

// Time compelixty: O(n)
// Space compleixty: O(1)

//Tests
// import solution = require('./solution');
// import {assert} from "chai";

// describe("solution", function(){
//   it("Basic Tests", function(){
//     assert.equal(solution.getAverage([2,2,2,2]),2);
//     assert.equal(solution.getAverage([1,2,3,4,5,]),3);
//     assert.equal(solution.getAverage([1,1,1,1,1,1,1,2]),1);
//   });
// });