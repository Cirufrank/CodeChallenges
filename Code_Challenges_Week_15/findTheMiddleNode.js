/*

Instrutcions:

876. Middle of the Linked List
Easy

5781

149

Add to List

Share
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100

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
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let listLength = 0;
    let positionOfMidNode = 0;
    
    let currentNode = head;
    
    while(currentNode) {
        listLength += 1;
        currentNode = currentNode.next;
    }
    
    positionOfMidNode = (listLength % 2 === 0) ? (listLength / 2) + 1 : Math.ceil(listLength / 2);
    
    currentNode = head;
    while (positionOfMidNode > 0) {
        if (positionOfMidNode === 1) return currentNode;
        positionOfMidNode -= 1;
        currentNode = currentNode.next;
    }
};