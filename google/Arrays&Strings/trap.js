/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:
n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
*/

var trap = function(height) {
    let trappedWater = 0;
    let lMaxRMaxArr = [];
    let [lMax, rMax] = [0, 0]
    for (let i = 0; i < height.length; i++) {
        lMaxRMaxArr[i] = lMax;
        lMax = Math.max(lMax, height[i]);
    }
    
    for (let i = height.length - 1; i >=0; i--) {
        lMaxRMaxArr[i] = Math.min(rMax, lMaxRMaxArr[i]);
        rMax = Math.max(rMax, height[i]);
    }
    
    for (let i = 0; i < height.length; i++) {
        let diff = lMaxRMaxArr[i] - height[i];
        if (diff <= 0) continue;
        trappedWater += diff;
    }
    return trappedWater;
};
