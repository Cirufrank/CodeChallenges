/*

Instructions:

Build Tower
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/

function towerBuilder(nFloors) {
    let tower = [];
    let floor = 1;
    
    while(floor <= nFloors) {
      if (floor === 1) tower.push("".padStart(floor, "*"));
      else {
        const prevFloorLength = tower[tower.length - 1].length;
        const currentFloorLength = prevFloorLength + 2;
        tower.push("".padStart(currentFloorLength, "*"))
      }
      floor += 1;
    }
    const lastFloorLength = tower[tower.length - 1].length;
    tower = tower.map(floor => {
      if (floor.length !== lastFloorLength) {
        let begAndEndSpace = (lastFloorLength - floor.length) / 2;
        floor = floor.padStart(lastFloorLength - begAndEndSpace, " ");
        floor = floor.padEnd(lastFloorLength, " ");
      }
      return floor;
    })
    return tower;
  }

/*

Tests:

describe("Tests", () => {
  it("test", () => {
Test.assertDeepEquals(towerBuilder(1), ["*"]);
Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);
  });
});

*/