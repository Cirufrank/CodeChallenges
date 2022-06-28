/*

Instructions:

Linked Lists - Append

Write an Append() function which appends one linked list to another. The head of the resulting list should be returned.

var listA = 1 -> 2 -> 3 -> null
var listB = 4 -> 5 -> 6 -> null
append(listA, listB) === 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
If both listA and listB are null/NULL/None/nil, return null/NULL/None/nil. If one list is null/NULL/None/nil and the other is not, simply return the non-null/NULL/None/nil list.

The push() and buildOneTwoThree() (build_one_two_three() in PHP and ruby) functions need not be redefined. The Node class is also predefined for you in PHP.

//PHP Only
class Node {
    public $data, $next;
    public function __construct($data, $next = NULL) {
      $this->data = $data;
      $this->next = $next;
    }
  }
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

  function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function append(listA, listB) {
    if (!listA && !listB) return null
    else if (!listA) return listB;
    else if (!listB) return listA;
    
    let currentNode = listA;
    console.log(listA)
     while(currentNode) {
       if (!currentNode.next) {
          currentNode.next = listB;
         return listA;
        }
       currentNode = currentNode.next;
     }
    // Your code goes here.
    // Remember to return the head of the list.
  }

/*

Tests:

var assertLinkedListEquals = function(listA, listB, message) {
  while (listA !== null && listB !== null) {
    Test.assertEquals(listA.data, listB.data, message)
    listA = listA.next;
    listB = listB.next;
  }
  Test.assertEquals(listA, null, message);
  Test.assertEquals(listB, null, message);
}

describe("tests for appending one linked list to another.", function() {
  it("should be able to handle two empty lists.", function() {
    Test.assertEquals(append(null, null), null, "appending two empty lists should return null.");
  });
  it("should be able to handle one empty list and one non-empty list.", function() {
    assertLinkedListEquals(append(null, buildOneTwoThree()), buildOneTwoThree(), "appending a list to null should return the list.");
    assertLinkedListEquals(append(buildOneTwoThree(), null), buildOneTwoThree(), "appending null to a list should return the list.");
  });
  it("should be able to handle two non-empty lists of length 1.", function() {
    assertLinkedListEquals(append(new Node(1), new Node(2)), buildOneTwo(), "appending a list to another list should return the concatenated list.");
    assertLinkedListEquals(append(new Node(2), new Node(1)), buildTwoOne(), "appending a list to another list should return the concatenated list.");
    assertLinkedListEquals(append(new Node(2), new Node(1)).next.next, null, "null should exist at end of concatenated linked list.");
  });
  it("should be able to handle two non-empty lists of length > 1.", function() {
    assertLinkedListEquals(append(buildOneTwoThree(), buildFourFiveSix()), buildOneTwoThreeFourFiveSix(), "appending a list to another list should return the concatenated list.");
    assertLinkedListEquals(append(buildFourFiveSix(), buildOneTwoThree()), buildFourFiveSixOneTwoThree(), "appending a list to another list should return the concatenated list.");
    assertLinkedListEquals(append(buildFourFiveSix(), buildOneTwoThree()).next.next.next.next.next.next, null, "null should exist at end of concatenated linked list.");
  });
});

*/

/*


reverseList([1,2,3,4,5])
  let reversedList = reverseList([2,3,4,5])
    let nextNode = [2,3,4,5];
    nextNode.next = [2,3,4,5];
    head.next = null;
    return reversedList;
  let nextNode = [1,2,3,4,5];
  nextNode.next = [1,2,3,4,5];
  head.next = null;
  return reversedList;
    
    
    
    */