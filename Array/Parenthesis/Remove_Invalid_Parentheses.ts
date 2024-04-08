// Leetcode: https://leetcode.com/problems/remove-invalid-parentheses/

const isValid = (s: string): boolean => {
    const stack: string[] = [];
    for (const c of s) {
        if (c === "(") {
            stack.push("(");
        } else if (c === ")") {
            if (stack.length > 0) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};

const removeInvalidParentheses = (s: string): string[] => {
    let result: string[] = [];
    let visit: Set<string> = new Set();
    let queue = [s];
    let found = false;

    while (queue.length) {
        let node = queue.shift() as string;
        if (isValid(node)) {
            result.push(node);
            found = true;
        }
        if (!found) {
            for (let i = 0; i < node.length; i++) {
                if ("()".includes(node[i])) {
                    let new_node = node.slice(0, i) + node.slice(i + 1);
                    if (!visit.has(new_node)) {
                        queue.push(new_node);
                        visit.add(new_node);
                    }
                }
            }
        }
    }

    return result;
};
