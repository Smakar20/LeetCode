/*
Given an array nums which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays.

Write an algorithm to minimize the largest sum among these m subarrays.

 

Example 1:
Input: nums = [7,2,5,10,8], m = 2
Output: 18

Explanation:
There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8],
where the largest sum among the two subarrays is only 18.

Example 2:
Input: nums = [1,2,3,4,5], m = 2
Output: 9

Example 3:
Input: nums = [1,4,4], m = 3
Output: 4
 
Constraints:
1 <= nums.length <= 1000
0 <= nums[i] <= 106
1 <= m <= min(50, nums.length)
*/

//Time: O(nlogn) | Space: O(1)
var splitArray = function (nums, m) {

	/*
	Inspired by @sgrg
	Iniitially we need to figure out our serch space for binary search
	with that being said we know for the fact that that 
	the Smallest larget sum in an array will be its largets element, 
	and the largest sum will be the sum of alll elements in an array
	since array contain on ly positive integers
	this will restrain our search space for binary search for Minimal Largest Sum along these M Subarrays
	*/

	let minMax = Math.max(...nums);
	let maxMax = 0;
	nums.forEach(ele => maxMax += ele);
	/*
	Now that we have purt search space we can begin searching for 
	the smallest value within this space such that we can form m 
	subarrays from nums array.
	*/

	let finalresult = 0;
	/* 
	Begin searching from the mid of our search space, 
	and check if it satifies the desired outcome
	*/

	while (minMax <= maxMax) {
		let mid = minMax + Math.floor((maxMax - minMax) / 2);
		if (isPossible(mid)) {
			finalresult = mid;
			maxMax = mid - 1;
		}
		else minMax = mid + 1;
	}
	return finalresult;

	/*
	function to see if X is a valid possiblity
	*/
	function isPossible(targetSum) {
		let partition = 1, sum = 0;
		for (let element of nums) {
			sum += element;
			if (sum > targetSum) {
				sum = element;
				partition++;
			}
		}
		return partition <= m;
	}

};
