// Leetcode: https://leetcode.com/problems/score-of-parentheses/

/**
 * @param { string } str
 * @return { number }
 */

function scoreOfParentheses(str: string): number {
        const stack: Array<number> = [];

        for (let i: number = 0; i < str.length; i++) {
                let bracket: string = str[i];
                if (bracket === "(") {
                        stack.push(0);
                } else {
                        let item = stack.pop();
                        let score = 2 * item || 1;
                        stack.length > 0 ? (stack[stack.length - 1] += score) : (stack[0] = score);
                }
        }

        return stack.pop();
}
