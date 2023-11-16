/*
Minimum Window Substring
Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:
m == s.length
n == t.length
1 <= m, n <= 10^5
s and t consist of uppercase and lowercase English letters.
 
Follow up: Could you find an algorithm that runs in O(m + n) time?
*/

var minWindow = function(s, t) {
    if (t.length > s.length || t.length === 0 || s.length === 0) return '';

    const dict = {};

    for (let i = 0; i < t.length; i++) {
        dict[t[i]] = (dict[t[i]] ?? 0) + 1;
    }

    const requiredCharsLen = Object.keys(dict).length;
    let [l, r, formed] = [0, 0, 0];

    const curWindowCharsCount = {};
    const ans = [Infinity, 0, 0];

    while (r < s.length) {
        const curChar = s[r];
        curWindowCharsCount[curChar] = (curWindowCharsCount[curChar] ?? 0) + 1;

        if ((curChar in dict) && dict[curChar] === curWindowCharsCount[curChar]) formed++;

        while (l <= r && formed === requiredCharsLen) {
            const leftChar = s[l];
            if (ans[0] > r + 1 - l) {
                ans[0] = r + 1 - l;
                ans[1] = l;
                ans[2] = r;
            }

            curWindowCharsCount[leftChar] -= 1;
            if ((leftChar in dict) && curWindowCharsCount[leftChar] < dict[leftChar]) formed--;
            l++;
        }
        r++;
    }
    return ans[0] === Infinity ? '' : s.slice(ans[1], ans[2] + 1);
};
