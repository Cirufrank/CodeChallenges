/*

Instructions:

94. Binary Tree Inorder Traversal
Easy

8303

380

Add to List

Share
Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 
*/

var inorderTraversal = function(root) {
    if (!root) return [];
    let result = [];
    
    const traverse = node => {
        if (node.left) traverse(node.left);
        result.push(node.val);
        if (node.right) traverse(node.right);
    }
    traverse(root);
    return result;
};

/*

Results:

Success
Details 
Runtime: 72 ms, faster than 75.27% of JavaScript online submissions for Binary Tree Inorder Traversal.
Memory Usage: 42 MB, less than 79.88% of JavaScript online submissions for Binary Tree Inorder Traversal.

*/