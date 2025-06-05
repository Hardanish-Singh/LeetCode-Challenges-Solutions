// Leetcode: https://leetcode.com/problems/reverse-integer/

// SOLUTION 1
var reverse = function (x) {
    if (x === 0) {
        return 0;
    }

    var reversedNumber = "";
    if (x < 0) {
        x = Math.abs(x);
        reversedNumber += "-";
    }

    while (x > 0) {
        let remainder = x % 10;
        reversedNumber += remainder;
        x = parseInt(x / 10);
    }

    if (parseInt(reversedNumber) < Math.pow(2, 31) * -1 || parseInt(reversedNumber) > Math.pow(2, 31) - 1) {
        return 0;
    }
    return parseInt(reversedNumber);
};

// SOLUTION 2 ( CONVERT TO STRING & USE STRING FUNCTIONS )
var reverse = function (x) {
    x = x.toString();
    var isNegative = false;
    if (x.startsWith("-")) {
        isNegative = true;
        x = x.slice(1);
    }
    x = x.split("").reverse().join("");

    if (isNegative) {
        x = "-" + x;
    }
    x = Number(x);
    if (x < Math.pow(2, 31) * -1 || x > Math.pow(2, 31) - 1) {
        return 0;
    }
    return x;
};
