/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

var longestCommonPrefix = function(arr) {
    if (!arr || arr.length === 0) return '';
    arr.sort((a, b) => a.length - b.length);
    let longest = '';
    let i = arr[0].length;
    while (i >= 0) {
        const longest = longestPrefixUtil(arr, arr[0], i);
        if (longest.length !== 0) return longest;
        i--;
    }
    return longest;
};

function longestPrefixUtil(arr, str, end) {
    let longest = str.slice(0, end);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].indexOf(longest) === -1 || arr[i].indexOf(longest) !== 0) return '';
  }
  return longest;
}
