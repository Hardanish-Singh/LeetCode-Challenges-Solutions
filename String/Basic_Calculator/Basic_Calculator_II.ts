// Leetcode: https://leetcode.com/problems/basic-calculator-ii/

/*
        Our goal is to transform the input from a string into an array of numbers where each element is an operand with its sign affixed.
        It's very obvious that we need to traverse the input string and somehow gathers information on both the numbers and the operators.
        
        For the number part: a string is a correct number until we hit a operator.
        For the operator part: The intuition here is to have a sign variable initialized to +, this way every time we see a new operator,
                               we actuall make the calculation using the sign and set the new operator as sign for next time use.
                               The tricky part here is whenever we meet a * or /, we need to get the last number from our calculation stack in order to make the operation.
                               At the end, we just need to add all the numbers from our call stack.
        
        NOTE: Substraction can be regarded as adding a negative number, that is, a - b = a + (-b)

        For example: "2+3*2" 
                where we initialize stack = [] & sign = +
                2 -> a number, stack = []
                + -> calc w/ sign +, stack = [2], set sign +
                3 -> a number
                * -> calc w/ sign + , stack = [2, 3], set sign *
                2 -> a number
                end -> calc w/ sign * using 3, calStack [2, 6]
                Sum of array is 8.
*/

const isOperator = (c: string): boolean => c === "+" || c === "-" || c === "*" || c === "/";

const calculate = (s: string): number => {
    // Remove all spaces from the string
    s.replace(/\s/g, "");
    let num: string = "";
    let stack: Array<number> = [];
    let sign: string = "+";

    for (let i: number = 0; i < s.length; i++) {
        // Number
        if (!isNaN(Number(s[i]))) {
            num += s[i];
        }
        // isOperator or last character
        if (isOperator(s[i]) || i === s.length - 1) {
            if (sign == "+") {
                stack.push(Number(num));
            } else if (sign == "-") {
                stack.push(Number(-num));
            } else if (sign == "*") {
                stack.push(Math.floor(stack.pop() * Number(num)));
            } else {
                stack.push(Math.trunc(stack.pop() / Number(num)));
            }
            sign = s[i];
            num = "";
        }
    }

    return stack.reduce((a, b) => a + b, 0);
};
