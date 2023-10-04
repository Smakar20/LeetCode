/**
Unique Paths

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right

Example 2:
Input: m = 7, n = 3
Output: 28
 */

var uniquePaths = function(m, n) {
    let paths = (new Array(m)).fill(new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                paths[i][j] = 1;
                continue;
            }

            const top = (i - 1) === -1 ? 0 : paths[i - 1][j];
            const left = (j - 1) === -1 ? 0 : paths[i][j - 1];
            paths[i][j] = top + left;
        }
    }
    return paths[m - 1][n - 1];
};
