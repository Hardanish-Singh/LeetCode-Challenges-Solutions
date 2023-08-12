// Leetcode: https://leetcode.com/problems/basic-calculator/

const isOperator = (c) => c === "+" || c === "-" || c === "(" || c === ")";

var calculate = function (s) {
    // Remove all spaces from the string
    s.replace(/\s/g, "");
    let num = "";
    let stack = [];
    let sign = "+";

    for (let i = 0; i < s.length; i++) {
        // Number
        if (!isNaN(s[i])) {
            num += s[i];
        }
        // isOperator or last character
        if (isOperator(s[i]) || i === s.length - 1) {
            stack.push(sign === "+" ? Number(num) : Number(-num));
            if (s[i] === "+") {
                sign = "+";
            } else if (s[i] === "-") {
                sign = "-";
            } else if (s[i] === "(") {
                stack.push(sign);
                // Pushed dummy character "X" to stack so that when we encounter closing bracker ")" it can be used as a stopping condition
                stack.push("X");
                sign = "+"; // reset sign to +
            } else if (s[i] === ")") {
                let sum = 0;
                // Dummy character "X" is used for stopping condition here
                while (stack[stack.length - 1] !== "X") {
                    sum += stack.pop();
                }
                stack.pop(); // remove "X"
                stack.push(stack.pop() === "+" ? sum : -sum);
            }
            num = "";
        }
    }

    return stack.reduce((a, b) => a + b, 0);
};
