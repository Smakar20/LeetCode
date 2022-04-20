/*
You are given an integer array nums. You must perform exactly one operation where you can replace one element nums[i] with nums[i] * nums[i]. 

Return the maximum possible subarray sum after exactly one operation. The subarray must be non-empty.


Example 1:
Input: nums = [2,-1,-4,-3]
Output: 17
Explanation: You can perform the operation on index 2 (0-indexed) to make nums = [2,-1,16,-3]. Now, the maximum subarray sum is 2 + -1 + 16 = 17.

Example 2:
Input: nums = [1,-1,1,1,-1,-1,1]
Output: 4
Explanation: You can perform the operation on index 1 (0-indexed) to make nums = [1,1,1,1,-1,-1,1]. Now, the maximum subarray sum is 1 + 1 + 1 + 1 = 4.
 

Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
*/

var maxSumAfterOperation = function(nums) {
    let sum = nums[0];
    let curMax = nums[0] * nums[0];
    let max = curMax;
    for(let i = 1; i < nums.length; i++){
        curMax = Math.max(((nums[i] * nums[i]) + sum), (nums[i] + curMax), (nums[i] * nums[i]));
        sum = Math.max((sum + nums[i]), nums[i]);
        if(curMax > max){
            max = curMax;
        }
    }
    return max;
};
