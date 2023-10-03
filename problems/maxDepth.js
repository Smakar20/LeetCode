/*
Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2
 

Constraints:
The number of nodes in the tree is in the range [0, 10^4].
-100 <= Node.val <= 100
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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    // DFS
    const maxDepth = {val: -1};
    maxDepthUtil(root, 1, maxDepth);
    return maxDepth.val;

    //alternate way
   /* const stack = [[root, 1]];
    let maxDepth = -1;
    while (stack.length > 0) {
        const [curNode, curDepth] = stack.pop();
        maxDepth = Math.max(maxDepth, curDepth);
        if (!!curNode.left) stack.push([curNode.left, curDepth + 1]);
        if (!!curNode.right) stack.push([curNode.right, curDepth + 1]);
    }
    return maxDepth;*/
};

function maxDepthUtil(root, curDepth, maxDepth) {
    if (!root.left && !root.right) {
        maxDepth.val = Math.max(maxDepth.val, curDepth);
        return;
    }

    if (!!root.left) maxDepthUtil(root.left, curDepth + 1, maxDepth);
    if (!!root.right) maxDepthUtil(root.right, curDepth + 1, maxDepth);
}
