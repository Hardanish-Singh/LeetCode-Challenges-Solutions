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
                sign = "+"; // reset sign to +
            } else if (s[i] === ")") {
                let sum = 0;
                // Dummy character "X" is used for stopping condition here
                while (typeof(stack[stack.length - 1]) === "number") {
                    sum += stack.pop();
                }
                sign = stack.pop();
                stack.push(sign === "+" ? sum : -sum);
            }
            num = "";
        }
    }

    return stack.reduce((a, b) => a + b, 0);
};
