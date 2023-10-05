/*
Rotting Oranges
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Example 1:
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:
Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:
Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.
*/

var orangesRotting = function(grid) {
    const directions = [[0, -1], [-1, 0], [0, 1], [1, 0]];
    const [rows, cols] = [grid.length, grid[0].length];
    let timeElapsed = 0;
    let oranges = 0;
    const queue = [];

    const isValid = (i, j) => {
        return (i >= 0 && i < rows && j >= 0 && j < cols);
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) oranges++;
            else if(grid[r][c] === 2) queue.push([r, c, 0]);
        }
    }

    while (queue.length > 0 && oranges > 0) {
        const[curRow, curCol, curTime] = queue.shift();
        if (grid[curRow][curCol] === 1) {
            grid[curRow][curCol] = 2;
            timeElapsed = curTime;
            oranges--;
        }
        
        for (const [i, j] of directions) {
            const[nextRow, nextCol] = [curRow + i, curCol + j];
            if (isValid(nextRow, nextCol) && grid[nextRow][nextCol] === 1) {
                queue.push([nextRow, nextCol, curTime + 1]);
            }
        }
    }
   
    return (oranges > 0) ? -1 : timeElapsed;
};
