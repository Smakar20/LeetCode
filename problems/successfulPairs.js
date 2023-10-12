/*
Successful Pairs of Spells and Potions
You are given two positive integer arrays spells and potions, of length n and m respectively, where spells[i] represents the strength of the ith spell and potions[j] represents the strength of the jth potion.

You are also given an integer success. A spell and potion pair is considered successful if the product of their strengths is at least success.

Return an integer array pairs of length n where pairs[i] is the number of potions that will form a successful pair with the ith spell. 

Example 1:
Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
Output: [4,0,3]
Explanation:
- 0th spell: 5 * [1,2,3,4,5] = [5,10,15,20,25]. 4 pairs are successful.
- 1st spell: 1 * [1,2,3,4,5] = [1,2,3,4,5]. 0 pairs are successful.
- 2nd spell: 3 * [1,2,3,4,5] = [3,6,9,12,15]. 3 pairs are successful.
Thus, [4,0,3] is returned.

Example 2:
Input: spells = [3,1,2], potions = [8,5,8], success = 16
Output: [2,0,2]
Explanation:
- 0th spell: 3 * [8,5,8] = [24,15,24]. 2 pairs are successful.
- 1st spell: 1 * [8,5,8] = [8,5,8]. 0 pairs are successful. 
- 2nd spell: 2 * [8,5,8] = [16,10,16]. 2 pairs are successful. 
Thus, [2,0,2] is returned.
 

Constraints:
n == spells.length
m == potions.length
1 <= n, m <= 10^5
1 <= spells[i], potions[i] <= 10^5
1 <= success <= 10^10
*/

var successfulPairs = function(spells, potions, success) {
    const binarySearch = (key) => {
        let[l, r] = [0, potions.length - 1];
        
        while (l < r) {
            const mid = parseInt((l + r) / 2);
            if (potions[mid] < key) l = mid + 1;
            else r = mid;
        }

        return l;
    };

    potions.sort((a, b) => a - b);
    const maxPotion = potions[potions.length - 1];
    const output = [];

    for (let spell of spells) {
        const minPotion = Math.ceil(success / spell);
        if (minPotion > maxPotion) {
            output.push(0);
            continue;
        }

        const idx = binarySearch(minPotion);
        output.push(potions.length - idx);
    }
    return output;
};

// ----------------------another way-------------------------
/*var successfulPairs = function(spells, potions, success) {
    const modifiedSpells = spells.map((spell, i) => [spell, i]);

    modifiedSpells.sort((a, b) => a[0] - b[0]);
    potions.sort((a, b) => a - b);
    const output = new Array(spells.length).fill(0);
    let curPotionsIdx = potions.length - 1;

    for (const [spell, idx] of modifiedSpells) {
        while (curPotionsIdx >= 0 && (spell * potions[curPotionsIdx]) >= success) curPotionsIdx--;
        output[idx] = potions.length - (curPotionsIdx + 1);
    }

    return output;
}; */


