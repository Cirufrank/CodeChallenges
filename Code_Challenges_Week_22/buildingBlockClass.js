/*

Instructions:

Write a class Block that creates a block (Duh..)

##Requirements

The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

Define these methods:

`getWidth()` return the width of the `Block`

`getLength()` return the length of the `Block`

`getHeight()` return the height of the `Block`

`getVolume()` return the volume of the `Block`

`getSurfaceArea()` return the surface area of the `Block`
Examples
    let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
    b.getWidth() // -> 2
    
    b.getLength() // -> 4
    
    b.getHeight() // -> 6
    
    b.getVolume() // -> 48
    
    b.getSurfaceArea() // -> 88
Note: no error checking is needed

Any feedback would be much appreciated

*/

class Block{
    constructor(data){
      const indexOfWidth = 0;
      const indexOfLength = 1;
      const indexOfHeight = 2;
      this.width = data[indexOfWidth] || null;
      this.length = data[indexOfLength] || null;
      this.height = data[indexOfHeight] || null;
    }
    
    getWidth() {
      return this.width;
    }
    getLength() {
      return this.length;
    }
    getHeight() {
      return this.height;
    }
    getVolume() {
      return this.length * this.width * this.height;
    }
    getSurfaceArea() {
      return (2 * this.length * this.width) + (2 * this.length * this.height) + (2 * this.height * this.width);
    }
    
  }

/*

Tests:

describe("Tests", () => {
  it("test", () => {
let block = new Block([2,4,6]);

Test.assertEquals(block.getWidth(),  2)
Test.assertEquals(block.getLength(), 4)
Test.assertEquals(block.getHeight(), 6)
Test.assertEquals(block.getVolume(), 48)
Test.assertEquals(block.getSurfaceArea(), 88)

  });
});

*/