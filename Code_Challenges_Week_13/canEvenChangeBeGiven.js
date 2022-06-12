/*

Instructions:

An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

Return that number, or -1 if it is impossible.

Good Luck!!!

*/

function solve(n) {
    const bankNotes = [500, 200, 100, 50, 20, 10];
    let valueRemaining = n;
    let numberOfBankNotes = 0;
    bankNotes.forEach(note => {
      while ((valueRemaining - note) >= 0) {
        numberOfBankNotes += 1;
        valueRemaining -= note;
      }
    })
    
    return (valueRemaining === 0) ? numberOfBankNotes : -1;
  }

/*

Tests:

describe("solve", function() {
  it("should work when chosing notes is possible", function() {
    Test.assertEquals(solve(770), 4, "Wrong result for 770");
    Test.assertEquals(solve(550), 2, "Wrong result for 550");
    Test.assertEquals(solve(10), 1, "Wrong result for 10");
    Test.assertEquals(solve(1250), 4, "Wrong result for 1250");
  });
  
  it("should return -1 if chosing notes is not possible", function() {
    Test.assertEquals(solve(125), -1, "Wrong result for 125");
    Test.assertEquals(solve(666), -1, "Wrong result for 666");
    Test.assertEquals(solve(42), -1, "Wrong result for 42");
  });
});

*/