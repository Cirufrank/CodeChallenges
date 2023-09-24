/*

206. Reverse Linked List
Easy
19.7K
357
Companies
Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

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
const reverseList = function(head) {
    if (!head || !head.next) return head
    let prevNode = head;
    let curNode = head.next
    prevNode.next = null;

    while(curNode.next) {
        const temp = curNode.next;
        curNode.next = prevNode;
        prevNode = curNode;
        curNode = temp
    }

    curNode.next = prevNode;
    return curNode;
};

/*

Result:

Runtime
Details
52ms
Beats 76.73%of users with JavaScript
Memory
Details
44.71MB
Beats 9.17%of users with JavaScript

*/