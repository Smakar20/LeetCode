/*
Delete Operation for Two Strings

Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.

In one step, you can delete exactly one character in either string.

Example 1:
Input: word1 = "sea", word2 = "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

Example 2:
Input: word1 = "leetcode", word2 = "etco"
Output: 4
 
Constraints:
1 <= word1.length, word2.length <= 500
word1 and word2 consist of only lowercase English letters.
*/

var minDistance = function(word1, word2) {
    const [w1L, w2L] = [word1.length, word2.length];
    const dp = new Array(w1L).fill(0).map(_ => new Array(w2L).fill(-1));

    const lcs = (i, j) => {
        if (i === w1L || j === w2L) return 0;
        if (dp[i][j] !== -1) return dp[i][j];

        dp[i][j] = (word1[i] === word2[j]) ? 1 + lcs(i + 1, j + 1) : Math.max(lcs(i + 1, j), lcs(i, j + 1));
        return dp[i][j];
    }

    return (w1L + w2L) - 2 * lcs(0, 0);
};
