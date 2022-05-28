/*

Instructions:

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

*/

function declareWinner(fighter1, fighter2, firstAttacker) {
    let firstFighter;
    let nextFighter;
    let fighters = [fighter1, fighter2];
    fighters.forEach((fighter) => {
      (fighter.name === firstAttacker) ? firstFighter = fighter : nextFighter = fighter;
    });
    let orderOfFightersArray = [firstFighter, nextFighter];
    let currentFighterIndex = 0;
    let nextFighterIndex = 1;
    let turns = 1;
    do {
      let currFighter = orderOfFightersArray[currentFighterIndex];
      let nextFighter = orderOfFightersArray[nextFighterIndex];
      nextFighter.health -= currFighter.damagePerAttack;
      if (nextFighter.health <= 0) return currFighter.name;
      turns += 1;
      if (turns % 2 === 0) {
        currentFighterIndex = 1;
        nextFighterIndex = 0;
      } else {
        currentFighterIndex = 0;
        nextFighterIndex = 1;
      }
    } while (true)
  }

/*

Tests:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Two fighters, one winner.", () => {
  it("Example Test Cases", () => {
    
    assert.strictEqual(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew");

    assert.strictEqual(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");

    assert.strictEqual(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")

    assert.strictEqual(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")

    assert.strictEqual(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")

    assert.strictEqual(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")

  });
});

*/