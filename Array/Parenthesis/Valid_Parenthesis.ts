// Leetcode: https://leetcode.com/problems/valid-parentheses/

type openingBrackets = {
        [key: string]: boolean;
};

type validBrackets = {
        [key: string]: string;
};

/**
 * @param { string } str
 * @return { boolean }
 */

var isValid = function (str: string): boolean {
        let stack: Array<string> = [];
        let openingBrackets: openingBrackets = {
                "(": true,
                "[": true,
                "{": true,
        };
        let validBrackets: validBrackets = {
                ")": "(",
                "]": "[",
                "}": "{",
        };

        for (let i: number = 0; i < str.length; i++) {
                let bracket: string = str[i];
                if (bracket in openingBrackets) {
                        stack.push(bracket);
                } else {
                        if (stack.length > 0 && stack[stack.length - 1] === validBrackets[bracket]) {
                                stack.pop();
                        } else {
                                return false;
                        }
                }
        }

        return stack.length > 0 ? false : true;
};
