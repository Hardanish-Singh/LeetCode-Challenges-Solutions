// Leetcode: https://leetcode.com/problems/happy-number/

// Solution 1
var isHappy = (n) => {
    while (true) {
        // prettier-ignore
        n = n.toString()
             .split("")
             .reduce((acc, digit) => acc + Math.pow(Number(digit), 2), 0);
        if (n < 10) {
            return n === 1 || n === 7;
        }
    }
};

// Solution 2
var isHappy = (n) => {
    if (n < 10) {
        return n === 1 || n === 7;
    }
    n = String(n)
        .split("")
        .reduce((acc, digit) => acc + Math.pow(Number(digit), 2), 0);
    return isHappy(n);
};
