/**
Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within 
the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that 
character three times in the final answer.

You may return the answer in any order.

Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]
 
Note:
1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] is a lowercase letter
 * @param {string[]} A
 * @return {string[]}
 */
 
var commonChars = function(A) {
    if (A.length === 0) return;
    var input = A;
    var output = [];
    for (var i = 0; i < input[0].length; i++){
        var found = true;
        for (var j = 1; j < input.length; j++){
            if (input[j].includes(input[0][i]) === false){
                found = false;
            }else{
                var idx = input[j].indexOf(input[0][i]);
                input[j] = input[j].substr(0,idx) + input[j].substr(idx+1);
            }
        }
        
        if (found) output.push(A[0][i]);    
    }
    return output;
};
