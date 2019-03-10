/**
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 7 x 3 grid. How many possible unique paths are there?

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
    var paths = [];
    var visited = new Set();
    uniquePathsUtils(m,n, [0,0], [m-1, n-1], paths, [], visited);
    return paths.length;
};

function uniquePathsUtils(m, n, start, finish, paths, curPath, visited){
    if(visited.has(JSON.stringify(start))) return
    if (start[0] === finish[0] && start[1] === finish[1]){
        paths.push(curPath.slice());
    }
    
    var options = getOptions(start, m, n);
    for(var op of options){
        curPath.push(start);
        visited.add(JSON.stringify(start));
        uniquePathsUtils(m, n, op, finish, paths, curPath, visited);
        curPath.pop();
        visited.delete(JSON.stringify(start));
    }
}

function getOptions(node, row, col){
    var options = [];
    if (node[0] + 1 < row) options.push([node[0] + 1, node[1]]);
    if (node[1] + 1 < col) options.push([node[0], node[1] + 1]);
    return options;
}

uniquePaths(7,3); //28
