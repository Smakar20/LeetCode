/*
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/

var maxProduct = function(nums) {
    let result = nums[0];
    let [curMax, curMin] = [result, result];
    for (let i = 1; i < nums.length; i++) {
        // multiplied by a negative makes big number smaller, small number bigger
        // so we redefine the curMin, curMax by swapping them.
        if (nums[i] < 0) {
           [curMax, curMin] = [curMin, curMax]; 
        }
        // max/min product for the current number is either the current number itself
        // or the max/min by the previous number times the current one
        curMax = Math.max(nums[i]*curMax, nums[i]);
        curMin = Math.min(nums[i]*curMin, nums[i])
        // the newly computed max value is a candidate for our global result
        result = Math.max(curMax, result);
    }
    return result;
    // alternate way
    // let [max, product] = [nums[0], 1];
    // for (let i = 0; i < nums.length; i++) {
    //     product *= nums[i];
    //     max = Math.max(max, product);
    //     if (product === 0) product = 1;
    // }
    // product = 1;
    // for (let i = nums.length - 1; i >= 0; i--) {
    //     product *= nums[i];
    //     max = Math.max(max, product);
    //     if (product === 0) product = 1;
    // }
    // return max;
};
