/**
 Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically 
neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
 */
 
 
var exist = function(board, word) {
    var visited = new Set();
    var starts = [];
    for (var i = 0; i < board.length; i++){
        for (var j = 0; j < board[0].length; j++){
            if (board[i][j] === word[0]) starts.push([i,j]);
        }
    }
    
    var found = false;
    for(var st of starts){
        //visited.add(JSON.stringify(st));
       found = existUtil(board, st, visited, word.substr(1));
        if(found) return true;
    }
    return false;
};

function existUtil(board, currentNode, visited, currentWord){
    if (visited.has(JSON.stringify(currentNode))) return;
    console.log('current: ', currentWord)
    if (currentWord === '') return true;
    var options = getOptions(board, currentNode);
    
    for (var op of options){
        if (board[op[0]][op[1]] !== currentWord[0]) continue;
        visited.add(JSON.stringify(currentNode));
         var found = existUtil(board, op, visited, currentWord.substr(1));
         if (found) return true;
        visited.delete(JSON.stringify(currentNode));
    }
    return false;
}

function getOptions(board, node){
    var x = node[0];
    var y = node[1];
    var options = [];
    
    if (x+1 < board.length) options.push([x+1, y]);
    
    if (y+1 < board[x].length) options.push([x, y+1])
    
    if (x-1 >= 0) options.push([x-1, y]);
    
    if (y-1 >= 0) options.push([x, y-1]);
    
    return options;
}
//exist([["a","b"]],"ba"); //true
//exist([["a","b"],["c","d"]],"bacd"); //true
/*exist([["C","A","A"],
        ["A","A","A"],
        ["B","C","D"]],"AAB") // true*/
var board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

/*Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.*/
exist(board, "ABCCED");

