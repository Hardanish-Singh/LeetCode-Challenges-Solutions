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
        let carryOver = 0;
        let sum = "";
        let answer = "";
        let j = b.length - 1;

        for (let i = a.length - 1; i >= 0; i--) {
                let temp = b[j] ? b[j--] : "0";
                if (a[i] === "1" && temp === "1") {
                        sum = carryOver === 1 ? "1" : "0";
                        carryOver = 1;
                } else if ((a[i] === "1" && temp === "0") || (a[i] === "0" && temp === "1")) {
                        carryOver === 1 ? ((sum = "0"), (carryOver = 1)) : ((sum = "1"), (carryOver = 0));
                } else {
                        carryOver === 1 ? (sum = "1") : (sum = "0");
                        carryOver = 0;
                }
                answer = String(+sum[sum.length - 1]) + answer;
        }

        carryOver > 0 ? (answer = carryOver + answer) : null;
        return answer.length > 1 && answer.startsWith("0") ? answer.slice(1) : answer;
};
