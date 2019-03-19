/*Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
 */

var setZeroes = function(matrix) {
    var posZeros = [];
    for (var i = 0; i < matrix.length; i++){
        for (var j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] === 0) posZeros.push([i,j]);
        }
    }
    
    for (var posZero of posZeros){
        for (var i = 0; i < matrix[posZero[0]].length; i++){
            matrix[posZero[0]][i] = 0;
        }
        for (var i = 0; i < matrix.length; i++){
            matrix[i][posZero[1]] = 0;
        }
    }
    return matrix;
};

//--------------------
setZeroes([
  [1,1,1],
  [1,0,1],
  [1,1,1]
])
