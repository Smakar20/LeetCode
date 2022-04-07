/*
Given a string s, return the length of the longest substring that contains at most two distinct characters.

 

Example 1:

Input: s = "eceba"
Output: 3
Explanation: The substring is "ece" which its length is 3.
Example 2:

Input: s = "ccaabbb"
Output: 5
Explanation: The substring is "aabbb" which its length is 5.
 

Constraints:

1 <= s.length <= 105
s consists of English letters.
*/

var lengthOfLongestSubstringTwoDistinct = function(s) {
    if (s.length === 0) return 0;
    let [l, maxLen] = [0, 1];
    const distCharMap = {};

    for (let r = 0; r < s.length; r++) {
        distCharMap[s[r]] = r;
        let distChars = Object.values(distCharMap);
        if (distChars.length === 3) {
            let lowestIdx = Math.min(...distChars);
            delete distCharMap[s[lowestIdx]];
            l = lowestIdx + 1;
        }
        maxLen = Math.max(maxLen, r + 1 - l);
    }
    return maxLen;
};
