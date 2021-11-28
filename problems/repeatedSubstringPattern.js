/*
Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

 

Example 1:

Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.
Example 2:

Input: s = "aba"
Output: false
Example 3:

Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 

Constraints:

1 <= s.length <= 104
s consists of lowercase English letters.
*/

var repeatedSubstringPattern = function(s) {
    if (s.length <= 1) {
        return false;
    }
    let subStr = '';
    for (let i = 0; i < s.length; i++) {
        subStr += s[i];
        if (s.length % subStr.length === 0 && subStr !== s) {
            let frequency = s.length / subStr.length;
            if (s === stringBuilder(subStr, frequency)) {
                return true;
            }
        }
    }
    return false;
};

function stringBuilder(str, frequency) {
    let i = 0; 
    let outputStr = '';
    while (i < frequency) {
        outputStr += str;
        i++;
    }
    return outputStr;
}
