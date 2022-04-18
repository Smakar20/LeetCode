/*
Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:
Input: matrix = [
[1,2,3],
[4,5,6],
[7,8,9]
]

Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input: matrix = [
[1,2,3,4],
[5,6,7,8],
[9,10,11,12]
]

Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
*/
var spiralOrder = function(matrix) {
    let output = [];
    let [up, down, left, right] = [0, matrix.length-1, 0, matrix[0].length-1];
    while (output.length < matrix.length * matrix[0].length) {
        // add column values: left - right
        for (let col = left; col <= right; col++) {
            output.push(matrix[up][col]);
        }
        //add row values: up - down
        for (let row = up + 1; row <= down; row++) {
            output.push(matrix[row][right]);
        }
        // add col values: right - left
        if (up != down) {
            for (let col = right - 1; col >= left; col--) {
                output.push(matrix[down][col]);
            }
        }
        //add row values: down - up
        if (left != right) {
            for (let row = down - 1; row > up; row--) {
                output.push(matrix[row][left]);
            }
        }
        up++;
        down--;
        left++;
        right--;
    }
    return output;
};
