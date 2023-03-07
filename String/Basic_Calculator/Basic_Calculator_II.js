// Helper functions

function is_operator(c) {
        return c === "+" || c === "-" || c === "*" || c === "/";
}

function is_digit(c) {
        return "0" <= c && c <= "9";
}

const calculate = (s) => {
        if (s == null || s.length === 0) {
                return null;
        }

        // remove space
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
                        else if (sign === "/") stack.push(~~(stack.pop() / n));

                        sign = character;
                        n = 0;
                }
        }
        return stack.reduce((a, b) => a + b);
};
