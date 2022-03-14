/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 
Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]
 

Constraints:
1 <= n <= 8
*/

//Time: O(2^n) | Space: O(n)
var generateParenthesis = function(n) {
    let output = [];
    generateParenthesisUtil(output, '', 0, 0, n);
    return output;
};

function generateParenthesisUtil(output, curStr, open, close, max) {
    if (curStr.length === max * 2) {
        output.push(curStr);
        return;
    }
    
    if (open < max) generateParenthesisUtil(output, curStr + '(', open + 1, close, max);
    if (close < open) generateParenthesisUtil(output, curStr + ')', open, close + 1, max);
}
