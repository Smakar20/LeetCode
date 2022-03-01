/*
Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region. 

Example 1:
Input: board = [["X","X","X","X"],
                ["X","O","O","X"],
                ["X","X","O","X"],
                ["X","O","X","X"]]
Output: [["X","X","X","X"],
         ["X","X","X","X"],
         ["X","X","X","X"],
         ["X","O","X","X"]]
Explanation: Surrounded regions should not be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the 
border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or 
vertically.

Example 2:
Input: board = [["X"]]
Output: [["X"]]
 

Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 200
board[i][j] is 'X' or 'O'.
*/

var solve = function(board) {
    for (let i = 0; i < board.length; i++) {
        for (j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'O' && (i === 0 || i === board.length - 1 || j === 0 || j === board[0].length - 1)) updateBorderingCells(board, i, j);
        }
    }
    
    for (let i = 0; i < board.length; i++) {
        for (j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'X') continue;
            board[i][j] = (board[i][j] === 'O') ? 'X' : 'O';
        }
    }
    return board;
};

function updateBorderingCells(board, row, col) {
    if (row < 0 || row >= board.length || j < 0 || j >= board[0].length || board[row][col] !== 'O') return;
    board[row][col] = 'U';
    const rowPosToCheck = [-1, 0, 1, 0];
    const colPosToCheck = [0, 1, 0, -1];
    for (let i = 0; i < 4; i++) {
        updateBorderingCells(board, row + rowPosToCheck[i], col + colPosToCheck[i]);
    }
}
