/*
Longest Common Subsequence

Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order 
of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

Example 1:
Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:
Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:
Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.

Constraints:
1 <= text1.length, text2.length <= 1000
text1 and text2 consist of only lowercase English characters.
*/

var longestCommonSubsequence = function(text1, text2) {
   /* const lcs = (i, j) => {
        if (text1[i] === undefined || text2[j] === undefined) return 0;
        if (text1[i] === text2[j]) return 1 + lcs(i + 1, j + 1);
        return Math.max(lcs(i + 1, j), lcs(i, j + 1));
    }
    return lcs(0, 0); */

    const lcsMap = new Array(text1.length+1).fill(null).map(() => new Array(text2.length+1).fill(0));

    const lcs = (i, j) => {
        for (let i = 1; i <= text1.length; i++){
            for (let j = 1; j <= text2.length; j++) {
                if (text1[i - 1] === text2[j - 1]) lcsMap[i][j] = 1 + lcsMap[i - 1][j - 1];
                else lcsMap[i][j] = Math.max(lcsMap[i - 1][j], lcsMap[i][j - 1]);
            }
        }
    };

    lcs(0, 0);
    return lcsMap[text1.length][text2.length];
};
