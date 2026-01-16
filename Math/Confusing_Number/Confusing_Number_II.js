// Leetcode: https://leetcode.com/problems/confusing-number-ii/

/**
 * @param {number} n
 * @return {boolean}
 */
var isConfusingNumber = function (n) {
    var rotation = {
        0: "0",
        1: "1",
        6: "9",
        8: "8",
        9: "6",
    };
    var invalids = {
        2: true,
        3: true,
        4: true,
        5: true,
        7: true,
    };

    var s1 = String(n);
    var s2 = "";

    for (let i = s1.length - 1; i >= 0; i--) {
        if (invalids[s1[i]]) {
            return false;
        } else {
            s2 += rotation[s1[i]];
        }
    }

    return s1 !== s2 ? true : false;
};

/**
 * @param { number } n
 * @return { number }
 */

var confusingNumberII = function (n) {
    // SOLUTION 1 (TLE)
    // var count = 0;

    // for (let i = n; i >= 0; i--) {
    //         if (isConfusingNumber(i)) {
    //                 count++;
    //         }
    // }

    // return count;

    // SOLUTION 2
    let canRotateNumbers = ["0", "1", "6", "8", "9"];
    let stack = ["1", "6", "8", "9"];
    let count = 0;

    while (stack.length > 0) {
        let number = stack.pop();
        if (isConfusingNumber(number)) {
            count++;
        }
        for (const item of canRotateNumbers) {
            if (Number(number + item) <= n) {
                stack.push(number + item);
            }
        }
    }

    return count;
};
