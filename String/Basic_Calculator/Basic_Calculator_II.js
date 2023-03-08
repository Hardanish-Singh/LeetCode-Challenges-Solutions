// Leetcode: https://leetcode.com/problems/basic-calculator-ii/

const is_operator = (c) => c === "+" || c === "-" || c === "*" || c === "/";

const is_digit = (c) => "0" <= c && c <= "9";

const calculate = (s) => {
        // remove space from the string
        s = s.replace(/\s/g, "");

        let stack = [];
        let n = 0;
        let sign = "+";

        for (let i = 0; i < s.length; i++) {
                const character = s[i];

                // number
                if (is_digit(character)) {
                        n = n * 10 + Number(character); // e.g. '14' -> 1 * 10 + 4
                }

                // sign or last number
                if (is_operator(character) || i === s.length - 1) {
                        if (sign === "-") stack.push(-n);
                        else if (sign === "+") stack.push(n);
                        else if (sign === "*") stack.push(stack.pop() * n);
                        else if (sign === "/") stack.push(Math.trunc(stack.pop() / n));

                        sign = character;
                        n = 0;
                }
        }
        return stack.reduce((a, b) => a + b);
};
