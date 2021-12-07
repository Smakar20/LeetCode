/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns 3 possible results:

-1: The number I picked is lower than your guess (i.e. pick < num).
1: The number I picked is higher than your guess (i.e. pick > num).
0: The number I picked is equal to your guess (i.e. pick == num).
Return the number that I picked.
*/

var guessNumber = function(n) {
    let startNum = 1;
    let endNum = n;
    while (startNum <= endNum) {
        mid = parseInt(startNum + (endNum - startNum)/2);
        if (guess(mid) === 0) {
            return mid;
        } else if (guess(mid) === -1) {
            endNum = mid;
        } else {
            startNum = mid + 1;
        }
    }
};
