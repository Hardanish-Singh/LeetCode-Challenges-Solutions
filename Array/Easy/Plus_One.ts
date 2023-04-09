// Leetcode: https://leetcode.com/problems/plus-one/

var plusOne = (digits: Array<number>): Array<number> => {
        let data = (BigInt(digits.join("")) + 1n).toString();
        return data.split("").map(Number);
};
