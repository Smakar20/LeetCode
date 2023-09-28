/*
Maximum Number of Vowels in a Substring of Given Length
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

Example 1:
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

Example 2:
Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.

Example 3:
Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
 

Constraints:
1 <= s.length <= 105
s consists of lowercase English letters.
1 <= k <= s.length
*/

var maxVowels = function(s, k) {
    let [l, maxCount, curCount] = [0, -Infinity, 0];
    const vowelsSet = new Set('aeiou');
    for (let r = 0; r < s.length; r++) {
        if (vowelsSet.has(s[r])) curCount += 1;
        if (r - l + 1 === k) {
            maxCount = Math.max(maxCount, curCount);
            if (vowelsSet.has(s[l])) curCount -= 1;
            l++;
        }
    }
    return maxCount;
};
