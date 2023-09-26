/*
Reverse Vowels of a String
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

var reverseVowels = function(str) {
    let [i, j] = [0, str.length - 1];
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const s = str.split('');
    while (i < j) {
        if (vowels.has(s[i]) && vowels.has(s[j])) {
            [s[i], s[j]] = [s[j], s[i]];
            i++;
            j--;
        }

        if (!vowels.has(s[i])) i++;
        if (!vowels.has(s[j])) j--;
    }
    return s.join('');
};
