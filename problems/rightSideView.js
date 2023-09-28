/*
Binary Tree Right Side View

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example 1:
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Example 2:
Input: root = [1,null,3]
Output: [1,3]

Example 3:
Input: root = []
Output: []
 
Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

var rightSideView = function(root) {
    if (!root) return [];
    const output = [];
    const queue = [root, null];
    let [prev, curr] = [null, root];

    while (queue.length > 0) {
        prev = curr;
        curr = queue.shift();

        while (curr !== null) {
            if (!!curr.left) queue.push(curr.left);
            if (!!curr.right) queue.push(curr.right);

            prev = curr;
            curr = queue.shift();
        }
        output.push(prev.val);
        if (queue.length > 0) queue.push(null);
    }
    return output;
};
