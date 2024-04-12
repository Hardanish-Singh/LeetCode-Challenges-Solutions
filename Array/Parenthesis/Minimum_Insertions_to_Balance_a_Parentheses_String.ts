// Leetcode: https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/

const minInsertions = (str: string): number => {
    let stack: Array<string> = [];
    let open: number = 0;
    let close: number = 0;

    for (let i: number = 0; i < str.length; i++) {
        if (str[i] === "(") {
            stack.push(str[i]);
        } else {
            if (str[i] === ")" && str[i + 1] === ")") {
                // There is '(' in stack, so we pop.
                if (stack.length > 0) {
                    stack.pop();
                }
                // No '(' in stack, thus we increment opening bracker counter
                else {
                    open++;
                }
                i++;
            } else {
                /* 
                        There is '(' in stack, so we pop & increment closing bracket counter for a filled stack -> ')' bracket and atleast 1 '(' in stack would need 1 ')' to make '())' 
                        */
                if (stack.length > 0) {
                    close++;
                    stack.pop();
                }
                // for an empty stack -> ')' bracket needs an '(' and a ')' to make '( ))'
                else {
                    open++;
                    close++;
                }
            }
        }
    }

    /*
        Every unmatched '(', needs two ')'
        Hence, we multiple by 2
    */
    let total = stack.length * 2;
    return total + open + close;
};
