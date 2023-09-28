/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
*/

var isSubsequence = function(s, t) {
    let currentStr = s;
    
    for (let str of t) {
        if (str === currentStr[0]) {
            currentStr = currentStr.slice(1);
        }
    }
    return currentStr.length === 0;
};

//------------------------ another way ---------------------------------
var isSubsequence = function(s, t) {
    let [l, r] = [0, 0];
    while (l < s.length && r < t.length) {
        if (s[l] === t[r]) l++;
        r++;
    }
    return l === s.length;
};
