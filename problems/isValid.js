/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/

var isValid = function(s) {
    let stack =[];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ')' || s[i] == '}' || s[i] == ']') {
            if (stack.length == 0) {
                return false;
            }
            
            let lastElement = stack.pop();
            if ((s[i] == ')' && lastElement != '(') || (s[i] == '}' && lastElement !== '{') || (s[i] == ']' && lastElement != '[')) {
                return false;
            }
            continue;
        }
        
        stack.push(s[i]);
    }
    return stack.length == 0;
};
