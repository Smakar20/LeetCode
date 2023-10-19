/*
Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

Insert a character
Delete a character
Replace a character
 
Example 1:
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

Example 2:
Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
 

Constraints:
0 <= word1.length, word2.length <= 500
word1 and word2 consist of lowercase English letters.
*/

// logic reference: https://www.youtube.com/watch?v=MiqoA-yF-0M

var minDistance = function(word1, word2) {
    const dpMap = new Array(word1.length + 1).fill(null).map(_ => new Array(word2.length + 1).fill(0));

    for (let c = 0; c <= word2.length; c++) {
        dpMap[0][c] = c;
    }

    for (let r = 0; r <= word1.length; r++) {
        dpMap[r][0] = r;
    }

    for (let i = 1; i < dpMap.length; i++) {
        for (let j = 1; j < dpMap[0].length; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dpMap[i][j] = dpMap[i - 1][j - 1];
            } else {
                dpMap[i][j] = 1 + Math.min(dpMap[i - 1][j - 1], dpMap[i][j - 1], dpMap[i - 1][j]);
            }
        }
    }
    return dpMap[word1.length][word2.length];
};
