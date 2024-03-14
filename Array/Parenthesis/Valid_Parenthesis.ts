// Leetcode: https://leetcode.com/problems/valid-parentheses/

type validBrackets = {
    [key: string]: string;
};

const isValid = (str: string): boolean => {
    let stack: Array<string> = [];
    const openingBrackets: Set<string> = new Set(["(", "[", "{"]);
    let validBrackets: validBrackets = {
        ")": "(",
        "]": "[",
        "}": "{",
    };

    for (let i: number = 0; i < str.length; i++) {
        let bracket: string = str[i];
        if (openingBrackets.has(bracket)) {
            stack.push(bracket);
        } else {
            if (stack.length > 0 && stack[stack.length - 1] === validBrackets[bracket]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length <= 0;
};
