/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is 
[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and 
become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1
 
Constraints:
1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104
*/

var search = function(nums, target) {
    if(nums.length == 0) return -1
    var start = findHead(nums, 0, nums.length-1)
    var idx = binarySearch(nums,target, 0, start)
    if(idx != -1) return idx
    return binarySearch(nums,target, start, nums.length - 1)
};

function findHead(arr, start, end){
  if(start == end) return start
  var mid = parseInt((start+end)/2)
  if(arr[0] > arr[mid]){
    return findHead(arr, start, mid)
  }else{
    return findHead(arr, mid+1, end)
  }
}

function binarySearch(arr, num, start, end){
    if(arr.length == 0 || (arr.length == 1 && arr[0] != num) || (start > end)) return -1
    var mid = parseInt((start+end)/2)
    if(num == arr[mid]){
      return mid
    }else if(num > arr[mid]){
       return binarySearch(arr,num, mid+1,end)
    }else if(num < arr[mid]){
      return binarySearch(arr,num, start, mid-1)
    }
}
