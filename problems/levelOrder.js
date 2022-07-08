/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []
 
Constraints:
The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
*/

var levelOrder = function(root) {
    if(!root) return [];
    var stack = [root, '-'];
    var current = [];
    var output = [];
    for (var i = 0;i < stack.length; i++){
        if (stack[i] === '-' && current.length!== 0){
            output.push([...current]);
            current.length = 0;
            stack.push('-');
            continue;
        }
        current.push(stack[i].val);
        if (stack[i].left) stack.push(stack[i].left);
        if (stack[i].right) stack.push(stack[i].right);
    }
    return output;
};
