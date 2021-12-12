/*
You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements
to the right of nums[i].

 

Example 1:

Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
Example 2:

Input: nums = [-1]
Output: [0]
Example 3:

Input: nums = [-1,-1]
Output: [0,0]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
*/

var countSmaller = function(nums) {
    if (nums.length === 0) return [];
    let output = new Array(nums.length - 1);
    let sortedArr = [...nums].sort((a, b) => a - b);
     for (let i = 0; i < nums.length; i++) {
         let idx = binarySearch(sortedArr, nums[i]);
         let count = 0;
         for (let j = idx - 1; j >= 0; j--) {
             if (sortedArr[j] < nums[i]) {
                 count = j + 1;
                 break;
             }
         }
         output[i] = count;
     }
    return output;
};

function binarySearch(list, target) {
    let left = 0;
    let right = list.length - 1;
    while(left <= right) {
        let mid = parseInt(left + (right - left)/ 2);
        if (target === list[mid]) {
            list.splice(mid, 1);
            return mid;
        } else if (target < list[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return 0;
}
