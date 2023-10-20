/*
Longest Increasing Subsequence

Given an integer array nums, return the length of the longest strictly increasing 
subsequence

Example 1:
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:
Input: nums = [0,1,0,3,2,3]
Output: 4

Example 3:
Input: nums = [7,7,7,7,7,7,7]
Output: 1
 
Constraints:
1 <= nums.length <= 2500
-10^4 <= nums[i] <= 10^4
 

Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?
*/

var lengthOfLIS = function(nums) {
    let [len, tempArr] = [1, []];
    tempArr.push(nums[0]);
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > tempArr[tempArr.length - 1]) {
            len++;
            tempArr.push(nums[i]);
        } else {
            let possibleIdx = findIndexToReplace(tempArr, nums[i]);
            tempArr[possibleIdx] = nums[i];
        }
    }
    return len;
};

function findIndexToReplace(arr, num) {
    let [l, r] = [0, arr.length - 1];
    while (l < r) {
        const mid = parseInt((l+r)/2);
        if (arr[mid] === num) return mid;
        if (arr[mid] < num) l = mid + 1;
        else r = mid;
    }
    return l;
}
