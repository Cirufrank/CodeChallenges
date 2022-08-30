/*

Instructions:

Background
You're modelling the interaction between a large number of quarks and have decided to create a Quark class so you can generate your own quark objects.

Quarks are fundamental particles and the only fundamental particle to experience all four fundamental forces.

Your task
Your Quark class should allow you to create quarks of any valid color ("red", "blue", and "green") and any valid flavor ('up', 'down', 'strange', 'charm', 'top', and 'bottom').

Every quark has the same baryon_number (BaryonNumber in C#): 1/3.

Every quark should have an .interact() (.Interact() in C#) method that allows any quark to interact with another quark via the strong force. When two quarks interact they exchange colors.

Example
>>> q1 = Quark("red", "up")
>>> q1.color
"red"
>>> q1.flavor
"up"
>>> q2 = Quark("blue", "strange")
>>> q2.color
"blue"
>>> q2.baryon_number
0.3333333333333333
>>> q1.interact(q2)
>>> q1.color
"blue"
>>> q2.color
"red"

*/

class Quark{
    constructor(color, flavor) {
      this.baryon_number = 1/3;
      this.color = color;
      this.flavor = flavor;
    }
    interact(quark2) {
     [this.color, quark2.color] = [quark2.color, this.color]
    }
  }

/*

Tests:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  let q1 = new Quark("red", "up")
  let q2 = new Quark("blue", "strange")
  it("Test #color and #flavor", () => {
    assert.strictEqual(q1.color, "red")
    assert.strictEqual(q2.flavor, "strange")
    assert.strictEqual(q2.baryon_number, 1 / 3)
  })
  it("Test #interact", () => {
    q1.interact(q2)
    assert.strictEqual(q1.color, "blue")  
  })
})

*/