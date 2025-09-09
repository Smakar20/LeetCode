/*
Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
 

Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"
Example 3:

Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
 

Constraints:

1 <= s.length <= 105
s[i] is either '(' , ')', or lowercase English letter.
*/
/**
 * @param {string} s
 * @return {string}
 */

var minRemoveToMakeValid = function(s) {
    const result = s.split(''); // Convert the string into an array for easy manipulation
    const stack = []; // Stack to track indices of unmatched '('

    // Traverse the string to find unmatched parentheses
    for (let i = 0; i < result.length; i++) {
        if (result[i] === '(') {
            stack.push(i); // Record index of '('
        } else if (result[i] === ')') {
            if (stack.length > 0) {
                stack.pop(); // Match ')' with a previous '('
            } else {
                result[i] = ''; // Replace unmatched ')' with an empty string
            }
        }
    }

    // Remove unmatched '(' by using their indices from the stack
    while (stack.length > 0) {
        result[stack.pop()] = ''; // Replace unmatched '(' with an empty string
    }

    return result.join(''); // Convert the array back to a string and return
};
