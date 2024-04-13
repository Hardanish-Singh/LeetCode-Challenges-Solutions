// Leetcode: https://leetcode.com/problems/generate-parentheses/

/*
        Coding Tips:
                1) if n = 3, then we can have 3 open & 3 closing parenthesis
                2) closing bracket cannot come before open bracket
        Rules:
                1) Only add open parenthesis if open < n
                2) Only add closing parenthesis if open > close
                3) We get a valid combination IIF,  open == close && close == n && open == n
*/

const generateParenthesis = (n: number): Array<string> => {
    const parenthesis: Array<[string, number, number]> = [["(", 1, 0]];
    while (true) {
        const [bracket, open, close]: [string, number, number] = parenthesis[0];
        // RULE 3
        if (open == close && close == n && open == n) {
            break;
        }
        parenthesis.shift();
        // RULE 1
        if (open < n) {
            parenthesis.push([bracket + "(", open + 1, close]);
        }
        // RULE 2
        if (open > close) {
            parenthesis.push([bracket + ")", open, close + 1]);
        }
    }
    return parenthesis.map((result) => result[0]);
};
