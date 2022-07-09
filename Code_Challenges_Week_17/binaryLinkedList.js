/*

Instructions:

1290. Convert Binary Number in a Linked List to Integer
Easy

2727

132

Add to List

Share
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

 

Example 1:


Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10
Example 2:

Input: head = [0]
Output: 0
 

Constraints:

The Linked List is not empty.
Number of nodes will not exceed 30.
Each node's value is either 0 or 1.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
    let decimalNum = 0;
    
    let currentNode = head;
    
    while (currentNode) {
        decimalNum = (decimalNum * 2) + currentNode.val;
        currentNode = currentNode.next;
    }
    
    return decimalNum;
};

/*

Results:

Success
Details 
Runtime: 71 ms, faster than 79.03% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
Memory Usage: 41.9 MB, less than 59.91% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.

*/