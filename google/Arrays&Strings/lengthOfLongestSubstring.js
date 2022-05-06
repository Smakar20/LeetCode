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

Example 4:
Input: s = "abba"
output: 2

Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

//Time: O(n) | Space: O(min(n, a) -> n is the length of the input string and a is the number of unique characters
var lengthOfLongestSubstring = function(s) {
    let [charMap, longest, l] = [{}, 0, 0];
    for (let r = 0; r < s.length; r++) {
        if (s[r] in charMap && charMap[s[r]] >= l) {
            l = charMap[s[r]] + 1; 
        }
        charMap[s[r]] = r;
        longest = Math.max(longest, r + 1 - l);
    }
    return longest;
};
