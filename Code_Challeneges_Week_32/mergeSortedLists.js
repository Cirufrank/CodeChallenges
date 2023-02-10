/*

Description:

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
    console.log(list1, list2)
    if (!list1 && !list2) return null
    else if (!list1) return list2
    else if (!list2) return list1
    const nodes = []
    while(list1) {
        nodes.push(list1)
        list1 = list1.next
    }

    while(list2) {
        nodes.push(list2)
        list2 = list2.next
    }
    nodes.sort((node1, node2) => node1.val - node2.val)
    const finalList = nodes.shift()
    let curNode = finalList
    while(nodes.length > 0) {
        curNode.next = nodes.shift()
        curNode = curNode.next
    }
    return finalList
};

/*

Results:

Runtime
83 ms
Beats
32.43%
Memory
43.7 MB
Beats
88.94%

*/