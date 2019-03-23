/*
Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . 
means it can represent any one letter.

Example:

addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
Note:
You may assume that all words are consist of lowercase letters a-z.
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

var WordDictionary = function() {
    this.root = new Tree();
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    addWordUtil(this.root, word, word);
};

function addWordUtil(root, curWord, word){
    if(curWord === ''){
        root.isWord = true;
        root.word = word;
        return;
    }
    
    var node = root.children.get(curWord[0]);
    if (node === undefined){
        node = new Tree();
        root.children.set(curWord[0], node);
    }
    addWordUtil(node, curWord.slice(1),word);
}
/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return searchUtil(this.root, word);
};

function searchUtil(root, word){
    if (root.isWord && word === '') return true;
    
    if (word[0] === '.'){
        for (var node of root.children.values()){
            if (searchUtil(node, word.slice(1))) return true;
        }
        return false;
    }
    
    var node = root.children.get(word[0]);
    return (node) ? searchUtil(node, word.slice(1)) : false;
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
 
