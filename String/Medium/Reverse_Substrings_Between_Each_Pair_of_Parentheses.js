// Leetcode: https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/

/**
 * @param {string} inputString
 * @return {string}
 */

var reverseParentheses = function (inputString) {
    let lastIndex = inputString.indexOf(")");
    let firstIndex = inputString.lastIndexOf("(", lastIndex);
    while (firstIndex != -1) {
        let before = inputString.slice(0, firstIndex);
        // prettier-ignore
        let reversed = inputString
                                    .slice(firstIndex + 1, lastIndex)
                                    .split("")
                                    .reverse()
                                    .join("");
        let after = inputString.slice(lastIndex + 1);
        inputString = before + reversed + after;
        lastIndex = inputString.indexOf(")");
        firstIndex = inputString.lastIndexOf("(", lastIndex);
    }
    return inputString;
};
