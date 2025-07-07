/*
        Given a string num which represents an integer, return true if num is a strobogrammatic number.
        A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

        Example 1:
                Input: num = "69"
                Output: true
        
        Example 2:
                Input: num = "88"
                Output: true
        
        Example 3:
                Input: num = "962"
                Output: false

        Constraints:
                1) 1 <= num.length <= 50
                2) num consists of only digits.
                3) num does not contain any leading zeros except for zero itself.
*/

/*
 * @param { string } num
 * @return { boolean }
 */

var isStrobogrammatic = function (n) {
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

    return s1 === s2 ? true : false;
};
