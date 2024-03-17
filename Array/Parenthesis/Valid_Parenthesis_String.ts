// Leetcode: https://leetcode.com/problems/valid-parenthesis-string/

const checkValidString = (str: string): boolean => {
    let openingParenthesis: number = 0;
    let closingParenthesis: number = 0;

    for (let i: number = 0; i < str.length; i++) {
        if (str[i] == "*" || str[i] == "(") {
            openingParenthesis++;
        } else {
            openingParenthesis--;
        }
        if (openingParenthesis < 0) {
            return false;
        }
    }

    for (let i: number = str.length - 1; i >= 0; i--) {
        if (str[i] == "*" || str[i] == ")") {
            closingParenthesis++;
        } else {
            closingParenthesis--;
        }
        if (closingParenthesis < 0) {
            return false;
        }
    }

    return true;
};
