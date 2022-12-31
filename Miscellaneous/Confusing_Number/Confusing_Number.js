// Leetcode: https://leetcode.com/problems/confusing-number/

/*
 * @param { number } n
 * @return { boolean }
 */

var confusingNumber = function (n) {
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
