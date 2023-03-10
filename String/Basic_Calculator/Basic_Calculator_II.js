// Leetcode: https://leetcode.com/problems/basic-calculator-ii/

/*
        Our goal is to transform the input from a string into an array of numbers where each element is an operand with its sign affixed.
        It's very obvious that we need to traverse the input string and somehow gathers information on both the numbers and the operators.
        For the number part: a string is a correct number until we hit a operator.
        For the operator part: The intuition here is to have a prevSign variable initialized to +, this way every time we see a new operator, 
                               we actuall make the calculation using the prevSign and set the new operator as prevSign for next time use.
                               The tricky part here is whenever we meet a * or /, we need to get the last number from our calculation stack in order to make the operation. 
                               At the end, we just need to add all the numbers from our call stack.
        Note: Substraction can be regarded as adding a negative number, that is, a - b = a + (-b)

*/

const isOperator = (c) => c === "+" || c === "-" || c === "*" || c === "/";

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
                if (isOperator(s[i]) || i === s.length - 1) {
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
