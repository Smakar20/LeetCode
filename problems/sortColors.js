/*
Sort Colors

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.


Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]
 
Constraints:
n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
 
Follow up: Could you come up with a one-pass algorithm using only constant extra space?
*/

var sortColors = function(nums) {
    // ------- count sort --------
    /*let [zerosCnt, onesCnt] = [0, 0];
    
    for (let num of nums) {
        if (num === 0) zerosCnt++;
        else if (num === 1) onesCnt++;
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (zerosCnt > 0) {
            nums[i] = 0;
            zerosCnt--;
            continue;
        }
        
        if (onesCnt > 0) {
            nums[i] = 1;
            onesCnt--;
            continue;
        }
        
        nums[i] = 2;
    }
    
    return nums;*/

    // ---------------- 3 pointers ----------------
    let [zeroP, twoP, curP] = [0, nums.length -1, 0];

    while (curP <= twoP) {
        if (nums[curP] === 2) {
            [nums[curP], nums[twoP]] = [nums[twoP], nums[curP]];
            twoP--;
        } 

        if (nums[curP] === 0) {
            [nums[curP], nums[zeroP]] = [nums[zeroP], nums[curP]];
            zeroP++;
            curP++;
        }

        if (nums[curP] === 1) curP++; 
    }
};
