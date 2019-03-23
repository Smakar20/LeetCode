/**
Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  
Return a list of all possible strings we could create.

Examples:
Input: S = "a1b2"
Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

Input: S = "3z4"
Output: ["3z4", "3Z4"]

Input: S = "12345"
Output: ["12345"]
Note:

S will be a string with length between 1 and 12.
S will consist only of letters or digits.

 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    if (S.length === 0) return [''];
    var output = [];
    
    for(var i = 0; i < S.length; i++){
        var current;
        if (isNaN(S[i])){
            current = [S[i].toLowerCase(), S[i].toUpperCase()];
        }else {
           current = S[i]; 
        }
        
        buildOutput(current, output); 
    }
    return output;
};

function buildOutput(current, output){
    if (output.length === 0){
        if (Array.isArray(current)){
            for (var c of current){
                output.push(c);
            }
        }else{
            output.push(current);
        }
    } else{
        if (Array.isArray(current)){
            var tempOutput = output.slice();
            output.length = 0;
            for (var o in tempOutput){
                 for (var c of current){
                    output.push(tempOutput[o] + c);
                 }
            }
        }else{
            for (var o in output){
                output[o] = output[o] + current;
            }
        }
    }
}
