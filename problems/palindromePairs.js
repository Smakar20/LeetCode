/*
Given a list of unique words, return all the pairs of the distinct indices (i, j) in the given list, so that the concatenation of the two words 
words[i] + words[j] is a palindrome.

 

Example 1:

Input: words = ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]]
Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]
Example 2:

Input: words = ["bat","tab","cat"]
Output: [[0,1],[1,0]]
Explanation: The palindromes are ["battab","tabbat"]
Example 3:

Input: words = ["a",""]
Output: [[0,1],[1,0]]
 

Constraints:

1 <= words.length <= 5000
0 <= words[i].length <= 300
words[i] consists of lower-case English letters.
*/

const palindromePairs = function(words) {
  const trie = createTrieStartingFromLastCharacterInEachWord(words);
  const results = []; // pairs of indexes for each palindrome
  words.forEach((word, wordIndex) => {
    let node = trie;
    addPotentialPalindrome(node, word, wordIndex, results); // checks for empty word ''
    for (let i=0; i<word.length; i++) {
      if (!node.next[word[i]]) return;
      node = node.next[word[i]];
      addPotentialPalindrome(node, word, wordIndex, results);
    }
    let remainingWords = findRemainingWords(node).filter(n => n !== node);
    remainingWords.forEach(node => {
      addPotentialPalindrome(node, word, wordIndex, results);
    });
  });
  return results;
};

class Trie {
  constructor() {
    this.next = {};
    this.word = null;
    this.wordIndex = null;
  }
}

const createTrieStartingFromLastCharacterInEachWord = words => {
  const trie = new Trie();
  words.forEach((word, index) => {
    let node = trie;
    for (let i=word.length-1; i>=0; i--) {
      // Create next pointer if not exists & move node to next pointer
      node = node.next[word[i]] = node.next[word[i]] || new Trie();
    }
    node.word = word;
    node.wordIndex = index;
  });
  return trie;
};

const addPotentialPalindrome = (node, word, wordIndex, results) => {
  if (nodeMakesAPalindromeWithWord(node, word, wordIndex))
    results.push([wordIndex, node.wordIndex]);
};

const nodeMakesAPalindromeWithWord = (node, word, wordIndex) => {
  if (node && (node.word || node.word === '') && wordIndex !== node.wordIndex) {
    if (word.length >= node.word.length) {
      return wordIsPalindrome(word.slice(node.word.length, word.length));
    } else {
      return wordIsPalindrome(node.word.slice(0, node.word.length-word.length))
    }
  }
  return false;
}

const wordIsPalindrome = word => {
  const half = Math.floor(word.length/2);
  for (let i=0; i<half; i++) {
    if (word[i] !== word[word.length-i-1]) return false;
  }
  return true;
};

const findRemainingWords = (node, results=[]) => {
  if (!node) return results;
  if (node.word) results.push(node);
  for (let k in node.next) {
    findRemainingWords(node.next[k], results);
  }
  return results;
};
