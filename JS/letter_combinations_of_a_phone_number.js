/*
        Leetcode: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
*/

const phoneNumberLetterCombinations = {
    0: "0",
    1: "1",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
};

/**
 * @param { string } digits
 * @return { string[] }
 */

var letterCombinations = function (digits) {
    if (digits.length < 1) {
        return [];
    } else {
        let letterCombinationsOfPhoneNumber = [];
        for (let i = 0; i < digits.length; i++) {
            letterCombinationsOfPhoneNumber = makeLetterCombinations(
                letterCombinationsOfPhoneNumber,
                phoneNumberLetterCombinations[digits[i]]
            );
        }
        return letterCombinationsOfPhoneNumber;
    }
};

/**
 * @param { string[] } value1
 * @param { string[] } value2
 * @return { string[] }
 */

function makeLetterCombinations(value1, value2) {
    let temp = [];
    if (value1.length === 0) {
        return value2.split("");
    } else {
        for (let i = 0; i < value1.length; i++) {
            for (let j = 0; j < value2.length; j++) {
                temp.push(value1[i] + value2[j]);
            }
        }
    }
    return temp;
}
