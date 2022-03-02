/*
You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all 
four edges of the grid are surrounded by water.

An island is considered to be the same as another if and only if one island can be translated (and not rotated or reflected) to equal the other.

Return the number of distinct islands.

 

Example 1:


Input: grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]
Output: 1
Example 2:


Input: grid = [[1,1,0,1,1],[1,0,0,0,0],[0,0,0,0,1],[1,1,0,1,1]]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] is either 0 or 1.
*/

// Time: O(rows * cols) -> where rows is the number of rows and cols is the number of columns in the grid.

var numDistinctIslands = function(grid) {
    const [rows, cols] = [grid.length, grid[0].length];
    let uniqueSets = new Set();
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] != 1) continue;
            const direction = findPosition(grid, i, j);
            uniqueSets.add(direction);
        }
    }
    return uniqueSets.size;
};

function findPosition(grid, curRow, curCol) {
    if (curRow < 0 || curRow >= grid.length || curCol < 0 || curCol >= grid[0].length || grid[curRow][curCol] !== 1) return '';
    grid[curRow][curCol] = '#';
    
    const rowPosToCheck = [-1, 0, 1, 0];
    const colPosToCheck = [0, 1, 0, -1];
    const posArr = ['u', 'r', 'd', 'l'];
    let direction = '';
    for (let i = 0; i < 4; i++) {
       direction += posArr[i] + findPosition(grid, curRow + rowPosToCheck[i], curCol + colPosToCheck[i]);
    }
    return direction;
}
