/*
Maximum Subsequence Score
You are given two 0-indexed integer arrays nums1 and nums2 of equal length n and a positive integer k. You must choose a subsequence of indices from nums1 of length k.

For chosen indices i0, i1, ..., ik - 1, your score is defined as:

The sum of the selected elements from nums1 multiplied with the minimum of the selected elements from nums2.
It can defined simply as: (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1]).
Return the maximum possible score.

A subsequence of indices of an array is a set that can be derived from the set {0, 1, ..., n-1} by deleting some or no elements.

 

Example 1:

Input: nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3
Output: 12
Explanation: 
The four possible subsequence scores are:
- We choose the indices 0, 1, and 2 with score = (1+3+3) * min(2,1,3) = 7.
- We choose the indices 0, 1, and 3 with score = (1+3+2) * min(2,1,4) = 6. 
- We choose the indices 0, 2, and 3 with score = (1+3+2) * min(2,3,4) = 12. 
- We choose the indices 1, 2, and 3 with score = (3+3+2) * min(1,3,4) = 8.
Therefore, we return the max score, which is 12.
Example 2:

Input: nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1
Output: 30
Explanation: 
Choosing index 2 is optimal: nums1[2] * nums2[2] = 3 * 10 = 30 is the maximum possible score.
 

Constraints:

n == nums1.length == nums2.length
1 <= n <= 10^5
0 <= nums1[i], nums2[j] <= 10^5
1 <= k <= n
*/

var maxScore = function(nums1, nums2, k) {
    const pairs = [];

    for (let i = 0; i < nums1.length; i++) {
        pairs[i] = [nums1[i], nums2[i]];
    }

    pairs.sort((a, b) => b[1] - a[1]);

    const queue = new MinHeap();
    let topKSum = 0;

    for (let i = 0; i < k; i++) {
        topKSum += pairs[i][0];
        queue.add(pairs[i][0]);
    }

    let answer = topKSum * pairs[k - 1][1];

    for (let i = k; i < pairs.length; i++) {
        topKSum -= queue.remove();
        topKSum += pairs[i][0];
        queue.add(pairs[i][0]);

        answer = Math.max(answer, topKSum * pairs[i][1]);
    } 

    return answer;
};

class MinHeap {
	heap= [];
	add(item) {
		this.heap.push(item);
		let index = this.heap.length - 1;
		let parentIndex = Math.floor((index - 1) / 2);
		while (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
			index = parentIndex;
			parentIndex = Math.floor((index - 1) / 2);
		}
	}
	remove() {
		if (!this.heap.length) {
			return null;
		}
		const item = this.heap[0];
		this.heap[0] = this.heap[this.heap.length - 1];
		this.heap.pop();
		let index = 0;
		 while (2 * index + 1 < this.heap.length) {
			 let smallerChildIndex = 2 * index + 1;
			 if ((2 * index + 2 < this.heap.length) && this.heap[2 * index + 2] < this.heap[2 * index + 1]) {
				smallerChildIndex = 2 * index + 2;
			 }
			 if (this.heap[index] < this.heap[smallerChildIndex]) {
				break;
			 }
       [this.heap[smallerChildIndex], this.heap[index]] = [this.heap[index], this.heap[smallerChildIndex]];
			 index = smallerChildIndex;
		}
		return item;
	}
}
