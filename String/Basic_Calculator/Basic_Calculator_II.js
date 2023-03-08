// Leetcode: https://leetcode.com/problems/basic-calculator-ii/

const is_operator = (c) => c === "+" || c === "-" || c === "*" || c === "/";

const is_digit = (c) => "0" <= c && c <= "9";

const calculate = (s) => {
        // remove space from the string
        s.replace(/\s/g, "");
        let num = "";
        let calc = [];
        let prevSign = "+";
        for (let i = 0; i < s.length; i++) {
                // number
                if (!isNaN(s[i])) {
                        num += s[i];
                }
                // sign or last number
                if (isNaN(s[i]) || i == s.length - 1) {
                        if (prevSign == "+") {
                                calc.push(Number(num));
                        } else if (prevSign == "-") {
                                calc.push(Number(-num));
                        } else if (prevSign == "*") {
                                calc.push(Math.floor(calc.pop() * num));
                        } else {
                                calc.push(Math.trunc(calc.pop() / num));
                        }
                        prevSign = s[i];
                        num = "";
                }
        }
        return calc.reduce((a, b) => a + b);
};
