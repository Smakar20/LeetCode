/**
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters 
may map to the same character but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 */
var isIsomorphic = function(s, t) {
    if(t.length != s.length) return false;
    var patternObj = {};
    var wrdObj = {};
    for(var i = 0; i < s.length; i++){
        if(patternObj[s[i]] === undefined){
            patternObj[s[i]] = t[i];
        }
        
        if(wrdObj[t[i]] === undefined){
           wrdObj[t[i]] = s[i]; 
        }
        
        if(patternObj[s[i]] !== t[i] || wrdObj[t[i]] !== s[i]) return false;
    }
    return true;
};

