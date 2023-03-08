// Leetcode: https://leetcode.com/problems/basic-calculator-ii/

const is_operator = (c) => c === "+" || c === "-" || c === "*" || c === "/";

const calculate = (s) => {
        // remove space from the string
        s.replace(/\s/g, "");
        let num = "";
        let stack = [];
        let prevSign = "+";

        for (let i = 0; i < s.length; i++) {
                if (Number.isInteger(Number(s[i]))) {
                        num += s[i];
                }
                // sign or last number
                if (is_operator(s[i]) || i == s.length - 1) {
                        if (prevSign == "+") {
                                stack.push(Number(num));
                        } else if (prevSign == "-") {
                                stack.push(Number(-num));
                        } else if (prevSign == "*") {
                                stack.push(Math.floor(stack.pop() * num));
                        } else {
                                stack.push(Math.trunc(stack.pop() / num));
                        }
                        prevSign = s[i];
                        num = "";
                }
        }

        return stack.reduce((a, b) => a + b);
};
