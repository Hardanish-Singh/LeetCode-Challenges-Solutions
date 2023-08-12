// Leetcode: https://leetcode.com/problems/basic-calculator/

const isOperator = (c) => c === "+" || c === "-" || c === "(" || c === ")";

var calculate = function (s) {
    // Remove all spaces from the string
    s.replace(/\s/g, "");
    let num = "";
    let stack = [];
    let prevSign = "+";

    for (let i = 0; i < s.length; i++) {
        // Number
        if (!isNaN(Number(s[i]))) {
            num += s[i];
        }
        // isOperator or last character
        if (isOperator(s[i]) || i === s.length - 1) {
            stack.push(prevSign === "+" ? Number(num) : Number(-num));
            if (s[i] === "+") {
                prevSign = "+";
            } else if (s[i] === "-") {
                prevSign = "-";
            } else if (s[i] === "(") {
                stack.push(prevSign);
                // Pushed dummy character "X" to stack so that when we encounter closing bracker ")" it can be used as a stopping condition
                stack.push("X");
                prevSign = "+"; // reset prevSign to +
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
