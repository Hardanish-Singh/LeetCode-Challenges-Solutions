// Leetcode: https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

/**
 * @param { string } str
 * @returns { string }
 */

// SOLUTION 1( USING STACK )
function minRemoveToMakeValid1(str: string): string {
        let stack: Array<number> = [];
        for (let i: number = 0; i < str.length; i++) {
                let bracket: string = str[i];
                if (bracket === "(") {
                        stack.push(i);
                } else if (bracket === ")") {
                        if (str[stack[stack.length - 1]] === "(") {
                                stack.pop();
                        } else {
                                stack.push(i);
                        }
                }
        }

        // If Stack Length > 0, then we have extra '(' in str for which ')' was not found.
        if (stack.length > 0) {
                let result = "";
                for (let i: number = 0; i < str.length; i++) {
                        if (!stack.includes(i)) {
                                result += str[i];
                        }
                }
                return result;
        } else {
                return str;
        }
}

/**
 * @param { string } str
 * @returns { string }
 */

// SOLUTION 2
function minRemoveToMakeValid2(str: string): string {
        let temp: string = "";
        let open: number = 0;

        for (let i: number = 0; i < str.length; i++) {
                if (str[i] === "(") {
                        open++;
                } else if (str[i] === ")") {
                        if (open === 0) {
                                continue;
                        }
                        open--;
                }
                temp += str[i];
        }

        let result: string = "";
        for (let i = temp.length - 1; i >= 0; i--) {
                if (temp[i] === "(" && open > 0) {
                        open--;
                        continue;
                }
                result += temp[i];
        }

        return result.split("").reverse().join("");
}
