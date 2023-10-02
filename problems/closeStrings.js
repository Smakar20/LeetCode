/*
Determine if Two Strings Are Close
Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

Example 1:
Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"

Example 2:
Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.

Example 3:
Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"

Constraints:
1 <= word1.length, word2.length <= 105
word1 and word2 contain only lowercase English letters.
*/

var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;
    // using hashMap
    const [word1Map, word2Map] = [{}, {}];

    for (let word of word1) {
        word1Map[word] = (word1Map[word] ?? 0) + 1;
    }

    for (let word of word2) {
        word2Map[word] = (word2Map[word] ?? 0) + 1;
    }

    if (!isEqual(Object.keys(word1Map).sort(), Object.keys(word2Map).sort())) return false;
    return isEqual(Object.values(word1Map).sort(), Object.values(word2Map).sort());

    // using array
    /*const [word1Arr, word2Arr] = [new Array(26).fill(0), new Array(26).fill(0)];
    lettersCount(word1, word1Arr);
    lettersCount(word2, word2Arr);

    for (let i = 0; i < 26; i++) {
        if ((word1Arr[i] === 0 && word2Arr[i] !== 0) || 
        (word2Arr[i] === 0 && word1Arr[i] !== 0)) return false;
    }
    return isEqual(word1Arr.sort(), word2Arr.sort());*/
};

function lettersCount(word, lettersCountArr) {
    for (let i in word) {
        const idx = word.charCodeAt(i) - 97;
        lettersCountArr[idx]++;
    }
}

function isEqual(arr1, arr2) {
    if (arr1?.length !== arr2?.length) return false;
    for (let i in arr1) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
