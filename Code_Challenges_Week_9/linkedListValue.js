/*

Instructions:

Implement the method lastIndexOf (last_index_of in PHP and Python), which accepts a linked list (head) and a value, and returns the index (zero based) of the last occurrence of that value if exists, or -1 otherwise.

For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, lastIndexOf / last_index_of should return 3.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null/None and can hold any type of value.

Good luck!

This kata is part of fun with lists series:

Fun with lists: length
Fun with lists: indexOf
Fun with lists: lastIndexOf
Fun with lists: countIf
Fun with lists: anyMatch + allMatch
Fun with lists: filter
Fun with lists: map
Fun with lists: reduce

*/

function lastIndexOf(head, value) {
    let lastIndexOfNum = -1;
    let counter = 0;
    while(head !== null) {
      if (head.data === value) {
        lastIndexOfNum = counter;
        counter += 1;
        head = head.next;
      } else {
        counter += 1;
        head = head.next;
      }
    }
    return lastIndexOfNum;
  }

  /*
  
  Tests:
  
  describe("lastIndexOf", function() {

  it("basic tests", function() {
    Test.assertEquals(lastIndexOf(null, 17), -1);
    Test.assertEquals(lastIndexOf(listFromArray([1, 2, 3]), 2), 1);
    Test.assertEquals(lastIndexOf(listFromArray(['aaa', 'b', 'abc']), 'aaa'), 0);
    Test.assertEquals(lastIndexOf(listFromArray([17, '17', 1.2]), 17), 0);
    Test.assertEquals(lastIndexOf(listFromArray([17, '17', 1.2]), '17'), 1);
    Test.assertEquals(lastIndexOf(listFromArray([1, 2, 3, 3]), 3), 3);
  });
  
});

*/