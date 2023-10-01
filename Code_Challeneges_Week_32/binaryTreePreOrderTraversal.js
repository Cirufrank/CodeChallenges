/*

Description:

144. Binary Tree Preorder Traversal
Easy
7.5K
193
Companies
Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,2,3]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 

Follow up: Recursive solution is trivial, could you do it iteratively?

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function(root) {
    if (root === null) return []
    const preOrderTraversalResult = [];

    const traverseTree = node => {
        preOrderTraversalResult.push(node.val);
        if (node.left) traverseTree(node.left);
        if (node.right) traverseTree(node.right);
    } 

    traverseTree(root);
    return preOrderTraversalResult;
    
};

/*

Results:

Runtime
Details
52ms
Beats 50.34%of users with JavaScript
Memory
Details
41.52MB
Beats 92.62%of users with JavaScript

*/