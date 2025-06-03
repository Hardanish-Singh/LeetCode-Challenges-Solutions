// Leetcode: https://leetcode.com/problems/integer-to-roman/

var intToRoman = function (n) {
    let numberLength = String(n).length;
    let romanNumerals = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M",
    };
    let numeral = "";

    while (n > 0) {
        let place = Math.pow(10, numberLength - 1);
        let firstNum = parseInt(n / place);

        if (firstNum == 4) {
            numeral += romanNumerals[place];
            numeral += romanNumerals[place * 5];
        } else if (firstNum == 9) {
            numeral += romanNumerals[place];
            numeral += romanNumerals[place * 10];
        } else {
            if (firstNum > 4) {
                numeral += romanNumerals[place * 5];
            }
            for (let i = 0; i < firstNum % 5; i++) {
                numeral += romanNumerals[place];
            }
        }

        n = n % place;
        numberLength--;
    }
    return numeral;
};
