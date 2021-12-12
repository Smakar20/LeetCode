/*
Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/

var canConstruct = function(ransomNote, magazine) {
    if (!magazine || ransomNote.length > magazine.length) return false;
    let map = {};
    for (let m of magazine) {
        map[m] = (map[m] ?? 0) + 1;
    }
    
    for (let r of ransomNote) {
        if (!map[r]) return false;
        map[r] = map[r] === 0 ? delete map[r] : map[r] - 1;
    }
    return true;
};
