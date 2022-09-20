// Leetcode: https://leetcode.com/problems/valid-parentheses/

/**
 * @param { string } s
 * @return { boolean }
 */

var isValid = function (s: string): boolean {
        let stack: Array<string> = [];
        let openingBrackets: {
                [key: string]: boolean;
        } = {
                "(": true,
                "[": true,
                "{": true,
        };
        let validBrackets: {
                [key: string]: string;
        } = {
                ")": "(",
                "]": "[",
                "}": "{",
        };

        for (let i: number = 0; i < s.length; i++) {
                let bracket: string = s[i];
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
