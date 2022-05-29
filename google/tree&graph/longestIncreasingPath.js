/*
Given an m x n integers matrix, return the length of the longest increasing path in matrix.

From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., 
wrap-around is not allowed).
 

Example 1:
Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].

Example 2:
Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
Output: 4
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

Example 3:

Input: matrix = [[1]]
Output: 1
 
Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 200
0 <= matrix[i][j] <= 231 - 1
*/
// Time: O(mn) : Space: O(mn)
var longestIncreasingPath = function(matrix) {
    if (matrix.length === 0) return 0;
    let maxPath = 0;
    const cache = matrix.map(row => row.map(col => col = 0));
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
           maxPath = Math.max(maxPath, longestIncreasingPathUtil(matrix, i, j, cache));
        }
    }
    return maxPath;
};

const rows = [-1, 0, 1, 0];
const cols = [0, 1, 0, -1];

function longestIncreasingPathUtil(matrix, row, col, cache) {
    if (cache[row][col] !== 0) return cache[row][col];
    for (let d = 0; d < 4; d++) {
        const [curRow, curCol] = [row + rows[d], col + cols[d]];      
        if (curRow >= 0 && curRow < matrix.length && curCol >= 0 && curCol < matrix[row].length && matrix[curRow][curCol] > matrix[row][col]) {
           cache[row][col] = Math.max(cache[row][col], longestIncreasingPathUtil(matrix, curRow, curCol, cache));
        }
    }
    return ++cache[row][col];
}
