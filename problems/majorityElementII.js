/**
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Note: The algorithm should run in linear time and in O(1) space.

Example 1:

Input: [3,2,3]
Output: [3]

Example 2:

Input: [1,1,1,3,3,2,2,2]
Output: [1,2]
 */
 
var majorityElement = function(nums) {
    var output = {};
    
    for (var i = 0; i < nums.length; i++){
        output[nums[i]] = (output[nums[i]] === undefined) ? 1: output[nums[i]] + 1;
    }

    var len = nums.length/3;

    for (var i in output){
        if (output[i] <= len){
            delete output[i];
        }
    }
    return Object.keys(output);
};

