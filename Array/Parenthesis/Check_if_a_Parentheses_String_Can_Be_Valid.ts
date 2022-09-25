// Leetcode: https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/

/**
 * @param { string } str
 * @param { string } locked
 * @returns { boolean }
 */

function canBeValid(str: string, locked: string): boolean {
        if (str.length % 2 !== 0) {
                return false;
        }

        let open: number = 0;
        let close: number = 0;

        for (let i: number = 0; i < str.length; i++) {
                if (locked[i] === "0" || str[i] === "(") {
                        open++;
                } else {
                        close++;
                }
                if (close > open) {
                        return false;
                }
        }

        open = 0;
        close = 0;

        for (let i: number = str.length - 1; i >= 0; i--) {
                if (locked[i] === "0" || str[i] === ")") {
                        close++;
                } else {
                        open++;
                }
                if (open > close) {
                        return false;
                }
        }

        return true;
}
