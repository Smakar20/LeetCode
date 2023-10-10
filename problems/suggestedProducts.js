/*
Search Suggestions System

You are given an array of strings products and a string searchWord.

Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return a list of lists of the suggested products after each character of searchWord is typed.

 

Example 1:

Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"].
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"].
After typing mou, mous and mouse the system suggests ["mouse","mousepad"].
Example 2:

Input: products = ["havana"], searchWord = "havana"
Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
Explanation: The only word "havana" will be always suggested while typing the search word.
 

Constraints:

1 <= products.length <= 1000
1 <= products[i].length <= 3000
1 <= sum(products[i].length) <= 2 * 10^4
All the strings of products are unique.
products[i] consists of lowercase English letters.
1 <= searchWord.length <= 1000
searchWord consists of lowercase English letters.
*/

var suggestedProducts = function(products, searchWord) {
    const trie = new Trie();

    for (let word of products){
        trie.insert(word);
    }

    let prefix = '';
    const result = [];
    for (let letter of searchWord) {
        const suggestion = trie.prefixSearch(prefix += letter);
        result.push(suggestion);
    }
    return result;
};

// ------- Tree class ----------
class Tree {
    constructor() {
        this.children = new Map();
        this.isword = false;
        this.word = '';
    }
}

// --------- Trie class ------------
class Trie {
    constructor() {
        this.root = new Tree();
    }

    insert (word) {
        let curNode = this.root;

        for (const letter of word) {
            if (!curNode.children.has(letter)) {
                curNode.children.set(letter, new Tree());
            }
            curNode = curNode.children.get(letter);
        }
        curNode.isWord = true;
        curNode.word = word;
    }

    prefixSearch(word) {
        let curNode = this.root;
        let result = [];

        for (const letter of word) {
            if (!curNode.children.has(letter)) return [];
            curNode = curNode.children.get(letter);
        }

        const dfs = (node) =>{
            if (node.isWord) result.push(node.word);

            for (let child of node.children.values()) {
                dfs(child);
            }
        };

        dfs(curNode);
        return result.sort().slice(0, 3);
    }
}
