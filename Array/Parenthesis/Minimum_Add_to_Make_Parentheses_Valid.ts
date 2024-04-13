// Leetcode: https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/

const minAddToMakeValid = (str: string): number => {
    let stack: Array<string> = [];
    for (let i: number = 0; i < str.length; i++) {
        let bracket: string = str[i];
        if (bracket === "(") {
            stack.push(bracket);
        } else {
            if (stack[stack.length - 1] === "(") {
                stack.pop();
            } else {
                stack.push(bracket);
            }
        }
    }
    return stack.length;
};
