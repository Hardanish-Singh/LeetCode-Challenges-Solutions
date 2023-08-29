// Leetcode: https://leetcode.com/problems/basic-calculator-iii/

const isOperator = (c) => c === "+" || c === "-" || c === "*" || c === "/" || c === "(" || c === ")";

const helper = (stack, sign, num) => {
    switch (sign) {
        case "+":
            stack.push(Number(num));
            break;
        case "-":
            stack.push(Number(-num));
            break;
        case "*":
            stack.push(Math.floor((stack.pop() ?? 1) * Number(num)));
            break;
        case "/":
            stack.push(Math.trunc((stack.pop() ?? 0) / Number(num)));
            break;
    }
};

const calculate = (s) => {
    // Remove all spaces from the string
    s.replace(/\s/g, "");
    let num = "";
    let stack = [];
    let sign = "+";
    const isNumber = new RegExp(/^\d+$/);

    for (let i = 0; i < s.length; i++) {
        // Number
        if (isNumber.test(s[i])) {
            num += s[i];
        }
        // isOperator or last character
        if (isOperator(s[i]) || i === s.length - 1) {
            if (s[i] === "(") {
                stack.push(sign);
                sign = "+"; // reset sign to +
            } else {
                helper(stack, sign, num);
                if (s[i] === ")") {
                    let sum = 0;
                    while (typeof stack[stack.length - 1] === "number") {
                        sum += stack.pop();
                    }
                    sign = stack.pop();
                    helper(stack, sign, sum);
                }
                sign = s[i];
            }
            num = "";
        }
    }

    return stack.reduce((a, b) => a + b, 0);
};
