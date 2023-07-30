/*
    Leetcode: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
*/

const phoneNumberLetterCombinations = {
    "0": "0",
    "1": "1",
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
};

const letterCombinations = (digits: string): Array<string> => {
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

const makeLetterCombinations = (
    letterCombinationsOfPhoneNumber: Array<string>,
    phoneNumberLetterCombinationValue: string
): Array<string> => {
    let combinations = [];
    if (letterCombinationsOfPhoneNumber.length === 0) {
        return phoneNumberLetterCombinationValue.split("");
    } else {
        letterCombinationsOfPhoneNumber.forEach((word) =>
            [...phoneNumberLetterCombinationValue].forEach((letter) => combinations.push(word + letter))
        );
    }
    return combinations;
};
