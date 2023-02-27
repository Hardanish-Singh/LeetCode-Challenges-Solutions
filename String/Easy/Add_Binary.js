// Leetcode: https://leetcode.com/problems/add-binary/

/**
 * @param { string } a
 * @param { string } b
 * @return { string }
 */

var addBinary = function (a, b) {
        if (b.length > a.length) {
                return addBinary(b, a);
        }
        let carry = 0;
        let sum = "";
        let answer = "";
        let j = b.length - 1;

        for (let i = a.length - 1; i >= 0; i--) {
                let temp = b[j] ? b[j--] : "0";
                if (a[i] === "1" && temp === "1") {
                        carry === 1 ? (sum = String(1)) : (sum = String(0));
                        carry = 1;
                } else if ((a[i] === "1" && temp === "0") || (a[i] === "0" && temp === "1")) {
                        carry === 1 ? ((sum = String(0)), (carry = 1)) : ((sum = String(1)), (carry = 0));
                } else {
                        carry === 1 ? (sum = String(1)) : (sum = String(0));
                        carry = 0;
                }
                answer = String(+sum[sum.length - 1]) + answer;
        }

        carry > 0 ? (answer = carry + answer) : null;
        return answer.length > 1 && answer.startsWith("0") ? answer.slice(1) : answer;
};
