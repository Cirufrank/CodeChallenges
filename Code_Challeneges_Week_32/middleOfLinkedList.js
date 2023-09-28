/*

Description:

876. Middle of the Linked List
Easy
10.5K
311
Companies
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
const middleNode = function(head) {
    if (!head) return head;
    //1. initialize an array
    //2. iterate through the linked list, pushing each node into the array
    //3. return the node/element at the position equal to the array's length divides by 2 and rounded down if needed
    const nodeArray = [];

    let curNode = head;

    while(curNode) {
        nodeArray.push(curNode);
        curNode = curNode.next;
    }

    return nodeArray[Math.floor(nodeArray.length/2)];
};