/*

Instructions:

Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.

*/

function isToday(date) {
    let today = new Date();
     today = today.toDateString();
     return date.toDateString() === today;
   }

/*

Tests:

const assert = require('chai').assert;
describe("Sample tests", () => {
  const today = new Date();
  it("should return <code>true</code> for today", () => {
    let actualToday = isToday(today);
    assertNotPrinting(actualToday);
    assert.strictEqual(actualToday, true)
  });
  
  it("should return <code>false</code> for tomorrow", () => {
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    assert.strictEqual(isToday(tomorrow), false);
  });
  
  it("should return <code>false</code> for yesterday", () => {
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    assert.strictEqual(isToday(yesterday), false);
  });
  
  function assertNotPrinting(actual) {
    assert.isDefined(actual, "You should return true or false. Did you print the answer instead?\n");
  }
});

 */