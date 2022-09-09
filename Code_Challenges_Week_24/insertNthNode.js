/*

Instructions:

Linked Lists - Insert Nth

Implement an InsertNth() function (insert_nth() in PHP) which can insert a new node at any index within a list.

InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below. Given a list, an index 'n' in the range 0..length, and a data element, add a new node to the list so that it has the given index. InsertNth() should return the head of the list.

insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)
You must throw/raise an exception (ArgumentOutOfRangeException in C#, InvalidArgumentException in PHP) if the index is too large.

The push() and buildOneTwoThree() (build_one_two_three() in PHP) functions do not need to be redefined. The Node class is also preloaded for you in PHP.

Related Kata in order of expected completion (increasing difficulty):
 Linked Lists - Push & BuildOneTwoThree
 Linked Lists - Length & Count
 Linked Lists - Get Nth Node
Linked Lists - Insert Nth Node
Linked Lists - Sorted Insert
Linked Lists - Insert Sort
Linked Lists - Append
Linked Lists - Remove Duplicates
Linked Lists - Move Node
Linked Lists - Move Node In-place
Linked Lists - Alternating Split
Linked Lists - Front Back Split
Linked Lists - Shuffle Merge
Linked Lists - Sorted Merge
Linked Lists - Merge Sort
Linked Lists - Sorted Intersect
Linked Lists - Iterative Reverse
Linked Lists - Recursive Reverse

Inspired by Stanford Professor Nick Parlante's excellent Linked List teachings.

 */

//Iterative Apporach
function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  
  function insertNth(head, index, data) {
    const newNode = new Node(data);
    if (!head && index > 0) throw new RangeError();
    
    if (index === 0) {
      newNode.next = head;
      return newNode;
    }
    
    let prevNode = head;
    let currentNode = head.next;
    
    while(index > -1) {
      index -= 1;
      if (index === 0) {
        prevNode.next = newNode;
        newNode.next = currentNode;
        return head;
      }
      prevNode = prevNode.next;
      currentNode = currentNode.next;
    }
    
    throw new RangeError();
  }

/*

Tests:

describe("tests for inserting the Nth node in a linked list.", function() {
  it("should be able to handle an empty list.", function() {
    Test.assertEquals(insertNth(null, 0, 12).data, 12, "should be able to insert a node on an empty/null list.");
    Test.assertEquals(insertNth(null, 0, 12).next, null, "value at index 1 should be null.");
  });
  it("should be able to insert a new node at the head of a list.", function() {
    Test.assertEquals(insertNth(buildOneTwoThree(), 0, 23).data, 23, "should be able to insert new node at head of list.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 0, 23).next.data, 1, "value for node at index 1 should be 1.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 0, 23).next.next.data, 2, "value for node at index 2 should be 2.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 0, 23).next.next.next.data, 3, "value for node at index 3 should be 3.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 0, 23).next.next.next.next, null, "value at index 4 should be null.");
  });
  it("should be able to insert a new node at index 1 of a list.", function() {
    Test.assertEquals(insertNth(buildOneTwoThree(), 1, 23).data, 1, "value for node at index 0 should be 1.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 1, 23).next.data, 23, "value for node at index 1 should be 23");
    Test.assertEquals(insertNth(buildOneTwoThree(), 1, 23).next.next.data, 2, "value for node at index 2 should be 2.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 1, 23).next.next.next.data, 3, "value for node at index 3 should be 3.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 1, 23).next.next.next.next, null, "value at index 4 should be null.");
  });
  it("should be able to insert a new node at index 2 of a list.", function() {
    Test.assertEquals(insertNth(buildOneTwoThree(), 2, 23).data, 1, "head should remain unchanged after inserting new node at index 2");
    Test.assertEquals(insertNth(buildOneTwoThree(), 2, 23).next.data, 2, "value at index 1 should remain unchanged after inserting new node at index 2");
    Test.assertEquals(insertNth(buildOneTwoThree(), 2, 23).next.next.data, 23, "value for node at index 2 should be 23.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 2, 23).next.next.next.data, 3, "value for node at index 3 should be 3.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 2, 23).next.next.next.next, null, "value at index 4 should be null.");
  });
  it("should be able to insert a new node at tail of a list.", function() {
    Test.assertEquals(insertNth(buildOneTwoThree(), 3, 23).data, 1, "head should remain unchanged after inserting new node at tail");
    Test.assertEquals(insertNth(buildOneTwoThree(), 3, 23).next.data, 2, "value at index 1 should remain unchanged after inserting new node at tail");
    Test.assertEquals(insertNth(buildOneTwoThree(), 3, 23).next.next.data, 3, "value for node at index 2 should be 3.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 3, 23).next.next.next.data, 23, "value for node at index 3 should be 23.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 3, 23).next.next.next.next, null, "value at index 4 should be null.");
  });
  it("should throw exception if index is too large.", function() {
    Test.expectError("Invalid index value should throw error.", function() {insertNth(buildOneTwoThree(), 4, 23)});
  });
});

*/