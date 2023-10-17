/*
Kth Largest Element in an Array

Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
 
Constraints:
1 <= k <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
*/

var findKthLargest = function(nums, k) {
    const positionToFind = nums.length - k;

    const findKthLargestUtil = (startIdx, endIdx) => {
        while (true) {
            if (startIdx > endIdx) break;
            let [pIdx, lIdx, rIdx] = [startIdx, startIdx + 1, endIdx];

            while (lIdx <= rIdx) {
                if (nums[lIdx] > nums[pIdx] && nums[rIdx] < nums[pIdx]) [nums[lIdx], nums[rIdx]] = [nums[rIdx], nums[lIdx]];
                if (nums[lIdx] <= nums[pIdx]) lIdx++;
                if (nums[rIdx] >= nums[pIdx]) rIdx--;
            }
            [nums[pIdx], nums[rIdx]] = [nums[rIdx], nums[pIdx]];

            if (rIdx === positionToFind) return nums[rIdx];
            if (rIdx > positionToFind) endIdx = rIdx - 1;
            else startIdx = rIdx + 1;
        }
    };

    return findKthLargestUtil(0, nums.length - 1);
};
