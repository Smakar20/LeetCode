/*
You are asked to design a file system that allows you to create new paths and associate them with different values.

The format of a path is one or more concatenated strings of the form: / followed by one or more lowercase English letters. For example, "/leetcode" 
and "/leetcode/problems" are valid paths while an empty string "" and "/" are not.

Implement the FileSystem class:

bool createPath(string path, int value) Creates a new path and associates a value to it if possible and returns true. Returns false if the path already 
exists or its parent path doesn't exist.
int get(string path) Returns the value associated with path or returns -1 if the path doesn't exist.
 
Example 1:
Input: 
["FileSystem","createPath","get"]
[[],["/a",1],["/a"]]
Output: 
[null,true,1]
Explanation: 
FileSystem fileSystem = new FileSystem();

fileSystem.createPath("/a", 1); // return true
fileSystem.get("/a"); // return 1

Example 2:
Input: 
["FileSystem","createPath","createPath","get","createPath","get"]
[[],["/leet",1],["/leet/code",2],["/leet/code"],["/c/d",1],["/c"]]
Output: 
[null,true,true,2,false,-1]
Explanation: 
FileSystem fileSystem = new FileSystem();

fileSystem.createPath("/leet", 1); // return true
fileSystem.createPath("/leet/code", 2); // return true
fileSystem.get("/leet/code"); // return 2
fileSystem.createPath("/c/d", 1); // return false because the parent path "/c" doesn't exist.
fileSystem.get("/c"); // return -1 because this path doesn't exist.
 

Constraints:
The number of calls to the two functions is less than or equal to 104 in total.
2 <= path.length <= 100
1 <= value <= 109
*/

/*
Time Complexity:
create ~ It takes O(T)O(T) to add a path to the trie if it contains TT components.
get ~ It takes O(T)O(T) to find a path in the trie if it contains TT components.
Space Complexity:
create ~ Lets look at the worst case space complexity. In the worst case, none of the paths will have any common prefixes. We are not considering the ancestors of a larger path here. In such a case, each unique path will end up taking a different branch in the trie. Also, for a path containing TT components, there will be TT nodes in the trie.
get ~ O(1)O(1).
*/

class Trie {
    constructor(name) {
        this.name = name;
        this.val = -1;
        this.children = new Map();
    }
}

var FileSystem = function() {
    this.root = new Trie('');
};

/** 
 * @param {string} path 
 * @param {number} value
 * @return {boolean}
 */
FileSystem.prototype.createPath = function(path, value) {
    const components = path.split('/');
    let cur = this.root;
    for (let i = 1; i < components.length; i++) {
        let curComponent = components[i];
        if (!cur.children.has(curComponent)) {
            if (i === components.length - 1) cur.children.set(curComponent, new Trie(curComponent));
            else return false;
        }
        cur = cur.children.get(curComponent);
    }
    if (cur.val !== -1) return false;
    cur.val = value;
    return true;
};

/** 
 * @param {string} path
 * @return {number}
 */
FileSystem.prototype.get = function(path) {
    const components = path.split('/');
    let cur = this.root;
    for (let i = 1; i < components.length; i++) {
        let curComponent = components[i];
        if (!cur.children.has(curComponent)) return -1;
        cur = cur.children.get(curComponent);
    }
    return cur.val;
};

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.createPath(path,value)
 * var param_2 = obj.get(path)
 */
 
