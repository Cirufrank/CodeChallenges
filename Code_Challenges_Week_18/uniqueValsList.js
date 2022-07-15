/*

Instructions:

83. Remove Duplicates from Sorted List
Easy

5249

192

Add to List

Share
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

Example 1:


Input: head = [1,1,2]
Output: [1,2]
Example 2:


Input: head = [1,1,2,3,3]
Output: [1,2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.

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
 var deleteDuplicates = function(head) {
    if (!head || !head.next) return head;
    let currentVals = [];
    let currentNode = head.next;
    let prevNode = head;
    
    while(currentNode) {
        currentVals.push(prevNode.val)
        if (currentVals.includes(currentNode.val)) {
            if (currentNode.next) {
                currentNode.val = currentNode.next.val;
                currentNode.next = currentNode.next.next;
            } else {
                prevNode.next = null;
                currentNode = null;
            }
                  
        } else {
            currentNode = currentNode.next;
            prevNode = prevNode.next;
        }
        
    }
    return head;
};