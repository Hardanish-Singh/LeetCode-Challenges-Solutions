// Leetcode: https://leetcode.com/problems/generate-parentheses/

/*

        Coding Tips:
                1) if n = 3, then we can have 3 open & 3 closing parenthesis
                2) closing bracket cannot come before open bracket
        Rules:
                1) Only add open parenthesis if open < n
                2) Only add closing parenthesis if open > close
                3) We get a valid combination IIF,  openParenthesisCount == closeParenthesisCount && closeParenthesisCount == n && openParenthesisCount == n
*/

/*
 * @param { number } n
 * @return { string[] }
 */

var generateParenthesis = function (n) {
        let parenthesis = [["(", 1, 0]];
        while (true) {
                let openParenthesisCount = parenthesis[0][1];
                let closeParenthesisCount = parenthesis[0][2];
                // RULE 3
                if (
                        openParenthesisCount == closeParenthesisCount &&
                        closeParenthesisCount == n &&
                        openParenthesisCount == n
                ) {
                        break;
                }
                let data = parenthesis.shift();
                let temp = [];
                let str = "";
                // RULE 1
                if (openParenthesisCount < n) {
                        str = data[0] + "(";
                        [, o, c] = data;
                        temp.push(str, ++o, c);
                        parenthesis.push(temp);
                        temp = [];
                }
                // RULE 2
                if (openParenthesisCount > closeParenthesisCount) {
                        str = data[0] + ")";
                        [, o, c] = data;
                        temp.push(str, o, ++c);
                        parenthesis.push(temp);
                        temp = [];
                }
        }
        return parenthesis.map((result) => result[0]);
};
