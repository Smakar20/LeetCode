/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

Example 1:
Input: num1 = "2", num2 = "3"
Output: "6"

Example 2:
Input: num1 = "123", num2 = "456"
Output: "56088"
 

Constraints:
1 <= num1.length, num2.length <= 200
num1 and num2 consist of digits only.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
*/

var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';
    let output = '';
    let level = 0;
    for (let i = num2.length - 1; i >= 0; i--) {
        let carry = 0;
        let cur = '';
        for (let j = num1.length - 1; j >= 0; j--) {
            const sum = carry + Number(num2[i]) * Number(num1[j]);
            cur = sum % 10 + cur;
            carry = Math.floor(sum / 10);
        }
        
        if (carry > 0) cur = carry + cur;
        cur = cur.padEnd(cur.length + level, '0');
        level++;

        carry = 0;
        if (output === '') output = cur;
        else {
            let [l, r] = [output.length - 1, cur.length - 1];
            let curAdd = '';
            while (l >= 0 || r >= 0 || carry > 0) {
                let sum = 0;
                sum += carry;
                if (l >= 0) { 
                    sum += Number(output[l]);
                    l--;
                }
                if (r >= 0) {
                    sum += Number(cur[r]);
                    r--;
                }
                curAdd = sum % 10 + curAdd;
                carry = Math.floor(sum / 10);
            }
            output = curAdd;
        }
    }
    return output;
};
