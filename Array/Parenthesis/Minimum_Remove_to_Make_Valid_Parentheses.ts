// Leetcode: https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

// SOLUTION ( USING STACK )
const minRemoveToMakeValid = (str: string): string => {
    let stack: number[] = [];
    let charArray: string[] = str.split("");

    for (let i = 0; i < charArray.length; i++) {
        if (charArray[i] === "(") {
            stack.push(i);
        } else if (charArray[i] === ")") {
            if (stack.length === 0) {
                charArray[i] = "";
            } else {
                stack.pop();
            }
        }
    }

    for (let i of stack) {
        charArray[i] = "";
    }

    return charArray.join("");
};
