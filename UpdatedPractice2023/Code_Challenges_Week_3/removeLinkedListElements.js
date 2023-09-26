/*
203. Remove Linked List Elements
Easy
7.8K
218
Companies
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

Example 1:


Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []
 

Constraints:

The number of nodes in the list is in the range [0, 104].
1 <= Node.val <= 50
0 <= val <= 50
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
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
    if (head === null) return head;
    else if (head.next === null) return head.val === val ? null : head;
    head = findHead(head, val);
    if (head === null) {
        return null;
    }
    let prevNode = head
    let curNode = head.next;

    while(curNode) {
        if (curNode.val === val) {
            prevNode.next = curNode.next
            curNode = curNode.next;
        } else {
            prevNode = curNode;
            curNode = curNode.next
        }
    }

    return head;
};

function findHead(head, val) {
    while (head) {
        if (head.val !== val) {
            return head;
        } else {
            head = head.next
        }
    }

    return head;
}

/*

Results:

Runtime
Details
75ms
Beats 16.14%of users with JavaScript
Memory
Details
45.15MB
Beats 99.52%of users with JavaScript

*/