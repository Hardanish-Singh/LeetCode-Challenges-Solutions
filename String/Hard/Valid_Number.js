// Leetcode: https://leetcode.com/problems/valid-number/

/*
 * @param {string} s
 * @return {boolean}
 */

var isNumber = function (s) {
    s = s.trim().toLowerCase();

    // Handle empty string
    if (s.length === 0) return false;

    // Helper function to check if character is a digit
    const isDigit = (char) => char >= "0" && char <= "9";

    // Helper function to check if character is a sign
    const isSign = (char) => char === "+" || char === "-";

    let index = 0;
    let hasDigit = false;

    // Parse optional sign
    if (index < s.length && isSign(s[index])) {
        index++;
    }

    // Parse digits before decimal point
    while (index < s.length && isDigit(s[index])) {
        hasDigit = true;
        index++;
    }

    // Parse decimal point and digits after it
    if (index < s.length && s[index] === ".") {
        index++;
        // Parse digits after decimal point
        while (index < s.length && isDigit(s[index])) {
            hasDigit = true;
            index++;
        }
    }

    // Must have at least one digit before 'e' or 'E'
    if (!hasDigit) return false;

    // Parse optional exponent
    if (index < s.length && s[index] === "e") {
        index++;

        // Exponent must have at least one character after 'e'
        if (index >= s.length) return false;

        // Parse optional sign in exponent
        if (index < s.length && isSign(s[index])) {
            index++;
        }

        // Must have at least one digit in exponent
        if (index >= s.length || !isDigit(s[index])) return false;

        // Parse remaining digits in exponent
        while (index < s.length && isDigit(s[index])) {
            index++;
        }
    }

    // Should have consumed entire string
    return index === s.length;
};
