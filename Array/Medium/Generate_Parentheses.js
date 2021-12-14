/*
        Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

        Example 1:
                Input: n = 3
                Output: [ "((()))", "(()())", "(())()", "()(())", "()()()" ]

        Example 2:
                Input: n = 1
                Output: [ "()" ]

        Constraints:
                1) 1 <= n <= 8

        Coding Tips:
                1) if n = 3, then we can have 3 open & 3 closing parenthesis
                2) closing bracket cannot come before open bracket
        Rules:
                1) Only add open parenthesis if open < n
                2) Only add closing parenthesis if open > close
                3) We get a valid combination if and only if, openParenthesisCount == closeParenthesisCount && closeParenthesisCount == n && openParenthesisCount == n
*/

/*
 * @param { number } n
 * @return { string[] }
*/


 var generateParenthesis = function( n ) {
        let parenthesis = [
                ['(', 1, 0]
        ];
        while( true ) {
                let openCount = parenthesis[0][1];
                let closeCount = parenthesis[0][2];
                // RULE 3
                if( openCount == closeCount && closeCount == n && openCount == n ) {
                        break;
                }
                let data = parenthesis.shift();
                let temp = [];
                let str = "";
                // RULE 1
                if( openCount < n ) {
                        str = data[0] + "(";
                        [, o, c] = data;
                        temp.push(str, ++o, c);
                        parenthesis.push(temp);
                        temp = [];
                }
                // RULE 2
                if( openCount > closeCount ) {
                        str = data[0] + ")";
                        [, o, c] = data;
                        temp.push(str, o, ++c);
                        parenthesis.push(temp);
                        temp = [];
                }
        }
        return parenthesis.map( result => result[0] );
};