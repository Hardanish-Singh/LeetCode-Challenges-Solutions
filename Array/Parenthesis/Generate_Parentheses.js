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

/**
 * @param { number } n
 * @return { string[] }
 */

var generateParenthesis = function (n) {
        let parenthesis = [["(", 1, 0]];
        while (true) {
                let [bracket, open, close] = parenthesis.shift();
                // RULE 3
                if (open == close && close == n && open == n) {
                        parenthesis.push([bracket, open, close]);
                        break;
                }
                let str = "";
                if (open < n) {
                        str = bracket + "(";
                        parenthesis.push([str, 1 + open, close]);
                }
                // RULE 2
                if (open > close) {
                        str = bracket + ")";
                        parenthesis.push([str, open, 1 + close]);
                }
        }
        return parenthesis.map((result) => result[0]);
};
