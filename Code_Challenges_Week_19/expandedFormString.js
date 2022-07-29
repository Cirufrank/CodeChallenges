/*

Instructions:

Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!

*/

function expandedForm(num) {
    let expandedForm = '';
    let stringNum = String(num);
    let place = 1;
    
    for (let position = stringNum.length - 1; position >=0; position -= 1) {
      const currentDigit = Number(stringNum[position]);
      if (currentDigit !== 0) {
        expandedForm = (expandedForm) ? `${currentDigit * place} + ${expandedForm}` : `${currentDigit * place}`;
      }
      place *= 10;
    }
    
    return expandedForm
  }

/*

Tests:

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(expandedForm(12), '10 + 2');
Test.assertEquals(expandedForm(42), '40 + 2');
Test.assertEquals(expandedForm(70304), '70000 + 300 + 4');
  });
});

*/