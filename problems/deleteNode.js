/*
Delete Node in a BST
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
 

Example 1:
            5                          5
          /    \                     /    \
        3        6       ->         4       6    
       / \        \                /         \
      2   4        7              2           7
  
Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]
Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

Example 2:
Input: root = [5,3,6,2,4,null,7], key = 0
Output: [5,3,6,2,4,null,7]
Explanation: The tree does not contain a node with value = 0.

Example 3:
Input: root = [], key = 0
Output: []
 
Constraints:
The number of nodes in the tree is in the range [0, 10^4].
-10^5 <= Node.val <= 10^5
Each node has a unique value.
root is a valid binary search tree.
-10^5 <= key <= 10^5

Follow up: Could you solve it with time complexity O(height of tree)?
*/

const successor = (root) => {
    while (root.left !== null) root = root.left;
    return root.val;
};

const predecessor = (root) => {
    while (root.right !== null) root = root.right;
    return root.val;
};

var deleteNode = function(root, key) {
    if (!root) return null;

    if (key > root.val) root.right = deleteNode(root.right, key);
    else if (key < root.val) root.left = deleteNode(root.left, key);
    else {
        if (root.left === null && root.right === null) root = null;
        else if (root.right !== null) {
            root.val = successor(root.right);
            root.right = deleteNode(root.right, root.val);
        } else {
            root.val = predecessor(root.left);
            root.left = deleteNode(root.left, root.val);
        }
    }
    return root
};
