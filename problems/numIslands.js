/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all 
surrounded by water. 

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/

//Time: O(nXm) | Space: O(nXm)

var numIslands = function(grid) {
    let [visited, count] = [[], 0];
    const[rows, cols] = [grid.length, grid[0].length];
    // keep track of visited cells
    for (let i = 0; i < rows; i++) {
        visited[i] = [];
        for (let j = 0; j < cols; j++) {
            visited[i][j] = false;
        }
    }
    
    //finding island count
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1' && !visited[i][j]) {
                count++;
                //mark the connected cells as visited true
                markAsVisited(grid, visited, i, j);
            }
        }
    }
   return count; 
};

function markAsVisited(grid, visited, row, col) {
   //mark the current cell as visited true
    visited[row][col] = true;
    const rowPosToCheck = [-1, 0, 0, 1];
    const colPosToCheck = [0, -1, 1, 0];
    
    // max surrounding cells to check would be 4 (top, left, right, bottom)
    for (let i = 0; i < 4; i++) {
      //check the surrounding cells and update them if the value is '1' and not visited yet
        if (isSafe(grid, visited, row + rowPosToCheck[i], col + colPosToCheck[i])) {
            //recursively update connect cell's visited status
            markAsVisited(grid, visited, row + rowPosToCheck[i], col + colPosToCheck[i]);
        }
    }
}

function isSafe(grid, visited, row, col) {
    return ((row >= 0 && row < grid.length) && (col >= 0 && col < grid[0].length) && (grid[row][col] === '1' && !visited[row][col]));
}
