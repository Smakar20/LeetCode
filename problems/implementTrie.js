/*
  Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.
 */
/**
 * Initialize your data structure here.
 */
class Tree{
    constructor(){
        this.isWord = false;
        this.word = '';
        this.children = new Map();
    }
}

var Trie = function() {
    this.root = new Tree();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    buildTrie(this.root, word, word);
};

function buildTrie(root, curWord, word){
    if(curWord === ''){
        root.isWord = true;
        root.word = word;
        return;
    }
    
    var node = root.children.get(curWord[0]);
    if(node === undefined){
        node = new Tree();
        root.children.set(curWord[0], node);
    }
    buildTrie(node,curWord.slice(1),word);
}

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
   return searchWord(this.root, word);
};

function searchWord(root, word){
    if(root.isWord && word === ''){
      return true;
    }
    
    var node = root.children.get(word[0]);
    if(node){
        return searchWord(node,word.slice(1));
    }
    return false;
}

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return prefixSearch(this.root, prefix);
};

function prefixSearch(root, word){
    if(word === '') return true;
    var node = root.children.get(word[0]);
    if(node) return prefixSearch(node, word.slice(1));
    return false;
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // returns true
console.log(trie.search("app"));     // returns false
console.log(trie.startsWith("app")); // returns true
trie.insert("app");   
console.log(trie.search("app"));     // returns true

