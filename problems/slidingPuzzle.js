/*
On an 2 x 3 board, there are five tiles labeled from 1 to 5, and an empty square represented by 0. A move consists of choosing 0 and a 4-directionally 
adjacent number and swapping it.

The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].

Given the puzzle board board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of 
the board to be solved, return -1.

Example 1:
Input: board = [[1,2,3],[4,0,5]]
Output: 1
Explanation: Swap the 0 and the 5 in one move.

Example 2:
Input: board = [[1,2,3],[5,4,0]]
Output: -1
Explanation: No number of moves will make the board solved.

Example 3:
Input: board = [[4,1,2],[5,0,3]]
Output: 5
Explanation: 5 is the smallest number of moves that solves the board.
An example path:
After move 0: [[4,1,2],[5,0,3]]
After move 1: [[4,1,2],[0,5,3]]
After move 2: [[0,1,2],[4,5,3]]
After move 3: [[1,0,2],[4,5,3]]
After move 4: [[1,2,0],[4,5,3]]
After move 5: [[1,2,3],[4,5,0]]
 

Constraints:

board.length == 2
board[i].length == 3
0 <= board[i][j] <= 5
Each value board[i][j] is unique.
*/

/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    let min = Number.MAX_VALUE;
  const target = '1,2,3,4,5,0';
  const cost = {};

  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 3; c++) {
      if (board[r][c] === 0) {
        dfs(r, c, 0);
        return min === Number.MAX_VALUE ? -1 : min;
      }
    }
  }

  function dfs(r, c, len) {
    let hash = board[0].join(',') + ',' + board[1].join(',');
    if (cost[hash] !== undefined && len >= cost[hash]) return;
    cost[hash] = len;

    if (hash === target) {
      min = Math.min(min, len);
      return;
    }

    for (let move of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
      const [rr, cc] = [r+move[0], c+move[1]];
      if (rr < 0 || cc < 0 || rr === 2 || cc === 3) continue;

      [board[r][c], board[rr][cc]] = [board[rr][cc], board[r][c]];
      dfs(rr, cc, len+1);
      [board[r][c], board[rr][cc]] = [board[rr][cc], board[r][c]];
    }
  }
};
