/*
Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.

 

Example 1:

Input: s = "eceba", k = 2
Output: 3
Explanation: The substring is "ece" with length 3.
Example 2:

Input: s = "aa", k = 1
Output: 2
Explanation: The substring is "aa" with length 2.
 

Constraints:

1 <= s.length <= 5 * 104
0 <= k <= 50
*/

var lengthOfLongestSubstringKDistinct = function(s, k) {
    if (k === 0) return 0;
    let [l, maxLen] = [0, 1];
    const distCharMap = {};

    for (let r = 0; r < s.length; r++) {
        distCharMap[s[r]] = r;
        let distChars = Object.values(distCharMap);
        if (distChars.length === k + 1) {
            let lowestIdx = Math.min(...distChars);
            delete distCharMap[s[lowestIdx]];
            l = lowestIdx + 1;
        }
        maxLen = Math.max(maxLen, r + 1 - l);
    }
    return maxLen;
};
