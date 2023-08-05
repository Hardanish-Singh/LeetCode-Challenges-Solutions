// Leetcode: https://leetcode.com/problems/letter-combinations-of-a-phone-number/

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
        let letterCombinationsOfPhoneNumber = [...phoneNumberLetterCombinations[digits[0]]];
        for (let i: number = 1; i < digits.length; i++) {
            makeLetterCombinations(letterCombinationsOfPhoneNumber, phoneNumberLetterCombinations[digits[i]]);
        }
        return letterCombinationsOfPhoneNumber;
    }
};

const makeLetterCombinations = (
    letterCombinationsOfPhoneNumber: Array<string>,
    phoneNumberLetterCombinationValue: string
): void => {
    let length = letterCombinationsOfPhoneNumber.length;
    for (let i: number = 0; i < length; i++) {
        const word = letterCombinationsOfPhoneNumber[i];
        [...phoneNumberLetterCombinationValue].forEach((letter) => letterCombinationsOfPhoneNumber.push(word + letter));
    }
    for (let i: number = 0; i < length; i++) {
        letterCombinationsOfPhoneNumber.shift();
    }
};
