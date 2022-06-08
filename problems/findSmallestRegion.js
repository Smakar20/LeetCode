/*
You are given some lists of regions where the first region of each list includes all other regions in that list.
Naturally, if a region x contains another region y then x is bigger than y. Also, by definition, a region x contains itself.
Given two regions: region1 and region2, return the smallest region that contains both of them.
If you are given regions r1, r2, and r3 such that r1 includes r3, it is guaranteed there is no r2 such that r2 includes r3.
It is guaranteed the smallest region exists.

Example 1:
Input:
regions = [["Earth","North America","South America"],
["North America","United States","Canada"],
["United States","New York","Boston"],
["Canada","Ontario","Quebec"],
["South America","Brazil"]],
region1 = "Quebec",
region2 = "New York"
Output: "North America"

Example 2:
Input: regions = [["Earth", "North America", "South America"],["North America", "United States", "Canada"],["United States", "New York", "Boston"],
["Canada", "Ontario", "Quebec"],["South America", "Brazil"]], region1 = "Canada", region2 = "South America"
Output: "Earth"
 
Constraints:
2 <= regions.length <= 104
2 <= regions[i].length <= 20
1 <= regions[i][j].length, region1.length, region2.length <= 20
region1 != region2
regions[i][j], region1, and region2 consist of English letters.
*/

var findSmallestRegion = function(regions, region1, region2) {
    const graph = new Map();
    
    for (const region of regions) { // graph each child region to their parent region
        const [parent, ...children] = region;
        
        for (const child of children) {
            graph.set(child, parent);
        }
    }
    
    const stack1 = [];

    while (region1 != null) { // start from the target region1 and build up stack of ancestors
        stack1.push(region1);
        region1 = graph.get(region1);
    }
    
    const stack2 = [];
    
    while (region2 != null) {
        stack2.push(region2); // start from the target region2 and build up stack of ancestors
        region2 = graph.get(region2);
    }
    
    let lca = "";
    
    while (stack1.length > 0 && stack2.length > 0) {
        const ancestor1 = stack1.pop();
        const ancestor2 = stack2.pop();
        
        if (ancestor1 === ancestor2) lca = ancestor1; // we want to find the lowest common ancestor
    }
    
    return lca;
};
