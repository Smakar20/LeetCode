/*
Decode String

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being 
repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets 
are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and 
that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

 
Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
 
Constraints:
1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].
*/

var decodeString = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ']') {
            stack.push(s[i]);
            continue;
        }
        
        let cur = stack.pop();
        let curStr = '';
        while (cur !== '[') {
            curStr = cur + curStr;
            cur = stack.pop();
        }
        let curNum = 0;
        let base = 1;
        while (stack.length && stack[stack.length - 1].match(/[0-9]/)) {
            curNum = curNum + (stack.pop() - '0') * base;
            base *= 10;
        }

        while (curNum != 0) {
            for (let j = 0; j < curStr.length; j++) {
                stack.push(curStr[j]);
            }
            curNum--;
        }
    }

    return stack.join('');
 
 //another way
 /*
 let stack = [];
    let currStr = '';
    let currNum = 0;
    
    for (let i = 0; i < s.length; i ++) {
        if (s[i] === '[') {
            stack.push(currStr);
            stack.push(currNum);
            currStr = '';
            currNum = 0;
        } else if (s[i] === ']') {
            let prevNum = stack.pop();
            let prevStr = stack.pop();
            currStr = prevStr + currStr.repeat(prevNum);
        } else if (s[i].match(/[0-9]/)) {
            currNum = currNum * 10 + Number(s[i]);
        } else {
            currStr += s[i];
        }
    }
    
    return currStr;
 */
};
