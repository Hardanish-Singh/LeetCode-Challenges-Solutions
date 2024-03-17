// Leetcode: https://leetcode.com/problems/score-of-parentheses/

const scoreOfParentheses = (str: string): number => {
    let score = 0;
    const stack: Array<number> = [score];

    for (let i: number = 0; i < str.length; i++) {
        let bracket: string = str[i];
        if (bracket === "(") {
            stack.push(0);
        } else {
            const top = stack.pop() as number;
            score = 2 * top || 1;
            stack[stack.length - 1] += score;
        }
    }

    return stack.pop() as number;
};
