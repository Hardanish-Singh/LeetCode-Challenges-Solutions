// Leetcode: https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/

const canBeValid = (str: string, locked: string): boolean => {
    if (str.length % 2 !== 0) {
        return false;
    }

    let open: number = 0;
    let close: number = 0;

    for (let i: number = 0; i < str.length; i++) {
        if (locked[i] === "0" || str[i] === "(") {
            open++;
        } else {
            open--;
        }
        if (open < 0) {
            return false;
        }
    }

    for (let i: number = str.length - 1; i >= 0; i--) {
        if (locked[i] === "0" || str[i] === ")") {
            close++;
        } else {
            close--;
        }
        if (close < 0) {
            return false;
        }
    }

    return true;
};
