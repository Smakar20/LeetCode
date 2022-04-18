/*
Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/

var longestPalindrome = function(s) {
    let longest = [0, 1];
    for (let i = 1; i < s.length; i++) {
        const oddPosPal = getPositions(s, i-1, i+1);
        const evenPosPal = getPositions(s, i-1, i);
        const curPos = (oddPosPal[1] - oddPosPal[0]) > (evenPosPal[1] - evenPosPal[0]) ? oddPosPal : evenPosPal;
        longest = (longest[1] - longest[0]) > (curPos[1] - curPos[0]) ? longest : curPos;
    }
    return s.slice(longest[0], longest[1]);
};

function getPositions(s, i, j) {
    while (i >= 0 && j < s.length) {
        if (s[i] !== s[j]) break;
        i--;
        j++;
    }
    return [i+1, j];
}
