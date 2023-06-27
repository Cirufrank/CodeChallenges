/*

Instructions:

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

*/

const DNA_MAP = new Map()
DNA_MAP.set("C", "G")
DNA_MAP.set("G","C");
DNA_MAP.set("A","T");
DNA_MAP.set("T","A");

function DNAStrand(dna){
  const dnaArray = dna.split("");
  for (let index = 0; index < dnaArray.length; index += 1) {
    const curElement = dnaArray[index]
    dnaArray[index] = DNA_MAP.get(curElement)
  }
  return dnaArray.join("")
}

/*

Tests:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAStrand("AAAA"),"TTTT","String AAAA is")
    assert.strictEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
    assert.strictEqual(DNAStrand("GTAT"),"CATA","String GTAT is")   
  })
})

*/