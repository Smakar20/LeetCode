/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:
Input: nums = []
Output: []

Example 3:
Input: nums = [0]
Output: []
 

Constraints:
0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

var threeSum = function(nums) {
    if (nums?.length < 3) return [];
    nums.sort((a,b) => a - b); 
    let output = [];
     for (let n = 0; n < nums.length - 2; n++) {
        if (nums[n] === nums[n - 1]) continue;
        let [l, r] = [n + 1, nums.length - 1];
         
        while (l < r) {
            const curSum = nums[n] + nums[l] + nums[r];
            if (curSum === 0) {
                output.push([nums[n], nums[l], nums[r]]);
                while(nums[l] === nums[l + 1]) l++;
                while(nums[r] === nums[r - 1]) r--;
                l++;
                r--;
            } else (curSum < 0) ? l++ : r--;
        }
    }
    return output;
};
