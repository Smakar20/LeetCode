/**
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
 */
var subsets = function(nums) {
    var output = {};
    subsetUtil(nums, 0, output, []);
    return Object.values(output);
};

function subsetUtil(nums, start, output, current){
    if (start > nums.length) return;
    if(output[JSON.stringify(current)] === undefined){
       output[JSON.stringify(current)] = current.slice();
    }
    
    for(var i = start; i < nums.length; i++){
        current.push(nums[i]);
        subsetUtil(nums, i+1, output, current);
        current.pop();
    }
}
