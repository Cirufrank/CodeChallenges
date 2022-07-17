/*

Instructions:

Linked Lists - Length & Count

Implement Length() to count the number of nodes in a linked list.

length(null) => 0
length(1 -> 2 -> 3 -> null) => 3
Implement Count() to count the occurrences of an integer in a linked list.

count(null, 1) => 0
count(1 -> 2 -> 3 -> null, 1) => 1
count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null,

 */

    function Node(data) {
        this.data = data;
        this.next = null;
      }
      
      function length(head) {
        let length = 0;
        let currentNode = head;
        while (currentNode) {
          length += 1;
          currentNode = currentNode.next;
        }
        return length
      }
      
      function count(head, data) {
        let occurencesOfInt = 0;
        let currentNode = head;
        while(currentNode) {
          if (currentNode.data === data) occurencesOfInt += 1
          currentNode = currentNode.next
        }
        return occurencesOfInt
      }

/*

Tests:

const {assert} = require("chai");

it("tests for counting the length of a linked list.", function() {
  assert.strictEqual(length(null), 0, "Length of null list should be zero.");
  assert.strictEqual(length(new Node(99)), 1, "Length of single node list should be one.");
  assert.strictEqual(length(buildOneTwoThree()), 3, "Length of the three node list should be three.");
});

it("tests for counting occurrences of a particular integer in a linked list.", function() {
  const list = buildOneTwoThree();
  assert.strictEqual(count(list, 1), 1, "list should only contain one 1.");
  assert.strictEqual(count(list, 2), 1, "list should only contain one 2.");
  assert.strictEqual(count(list, 3), 1, "list should only contain one 3.");
  assert.strictEqual(count(list, 99), 0, "list should return zero for integer not found in list.");
  assert.strictEqual(count(null, 1), 0, "null list should always return count of zero.");
});

*/