/*

Instructions:

Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false

Example 2:
Input: intervals = [[7,10],[2,4]]
Output: true

 what productes false?
     
Constraints:
0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti < endi <= 106

*/

function canIMakeIt(array) {
    let canIMakeItThere = [true];
    let arrayOfStarts = [];
    let arrayOfEnds = [];
    let numOfOtherElements = array.length - 1;
    
    for (let i = 0; i < array.length; i += 1) {
        let currentStart = array[i][0];
        let currentEnd = array[i][1];
        arrayOfStarts.push( currentStart);
        arrayOfEnds.push(currentEnd);
    }
    
    for (let i = 0; i <= array.length; i += 1) {
        let currentStart = arrayOfStarts[i];
        let currentEnd = arrayOfEnds[i];
        
        array.forEach((elem, index) => {
            if(index !== i && index > i) {
                 let startToCompare = arrayOfStarts[index];
                let endToCompare = arrayOfEnds[index];
                if((startToCompare >= currentStart && startToCompare <= currentEnd) || (currentEnd >= currentStart && currentEnd <= endToCompare)) {
                    canIMakeItThere.splice(0, 1, false);
            }
        }
        });
    }

       
                       return canIMakeItThere[0];
    
}

/*

Tests:

canIMakeIt( [[0,30],[5,10],[15,20]]) => false
canIMakeIt([[7,10],[2,4]]) => true

*/