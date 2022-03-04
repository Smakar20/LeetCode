/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
Input: array = [1, 5, 4, 3]
Output: 6
Explanation : 
5 and 3 are distance 2 apart. 
So the size of the base = 2. 
Height of container = min(5, 3) = 3. 
So total area = 3 * 2 = 6
 

Example 2:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49

Example 3:
Input: height = [1,1]
Output: 1
 

Constraints:
n == height.length
2 <= n <= 105
0 <= height[i] <= 104

Hint #1  
The aim is to maximize the area formed between the vertical lines. The area of any container is calculated using the shorter line as length and the distance between the lines as the width of the rectangle.
Area = length of shorter vertical line * distance between lines
We can definitely get the maximum width container as the outermost lines have the maximum distance between them. However, this container might not be the maximum in size as one of the vertical lines of this
container could be really short.

Hint #2  
Start with the maximum width container and go to a shorter width container if there is a vertical line longer than the current containers shorter line. This way we are compromising on the width but we are looking 
forward to a longer length container.
*/
//Time: O(n) | O(1)
var maxArea = function(height) {
    let [maxAmtOfWater, curAmtOfWater, l, r] = [0, 0, 0, height.length - 1];
    
    while (l < r) {
        curAmtOfWater = (r - l) * Math.min(height[r], height[l]);
        maxAmtOfWater = Math.max(maxAmtOfWater, curAmtOfWater);
        (height[l] < height[r]) ? l++ : r--;
    }
    return maxAmtOfWater;
};
