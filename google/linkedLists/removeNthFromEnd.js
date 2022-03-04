/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
 

Constraints:
The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
*/

function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
    if (!head) return head;
    let [slowNode, fastNode, prev] = [head, head, null];
    for (let i = 1; i < n; i++) {
        if (fastNode.next) fastNode = fastNode.next;
    }
    
    while (fastNode.next) {
        fastNode = fastNode.next;
        prev = slowNode;
        slowNode = slowNode.next;
    }
    if (slowNode === head) return head.next;
    prev.next = slowNode.next;
    return head;
};
