/**
Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) return [];
    var paths = [];
    binaryTreePathsUtil(root, paths, []);
    return paths;
};

function binaryTreePathsUtil(root, paths, current){
    current.push(root.val);
    if (!root.left && !root.right){
        paths.push(current.slice().join('->'));
        return;
    }
    
    if (root.left){
        binaryTreePathsUtil(root.left, paths, current);
        current.pop();
    }
    if (root.right){
        binaryTreePathsUtil(root.right, paths, current);
        current.pop();
    }    
}
