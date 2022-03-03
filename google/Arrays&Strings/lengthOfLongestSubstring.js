/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

//Time: O(n) | Space: O(min(n, a)
var lengthOfLongestSubstring = function(s) {
    let [longestSubStrPos, curSubStrLen, startIdx] = [[0,0], 0, 0];
    let charMap = {};
    for (let i = 0; i < s.length; i++) {
        if (s[i] in charMap) {
            startIdx = Math.max(startIdx, charMap[s[i]] + 1);
        }
        
        curSubStrLen = i + 1 - startIdx;
        if (longestSubStrPos[1] - longestSubStrPos[0] < curSubStrLen) longestSubStrPos = [startIdx, i + 1];
        charMap[s[i]] = i;
    }
    return longestSubStrPos[1] - longestSubStrPos[0];
};
