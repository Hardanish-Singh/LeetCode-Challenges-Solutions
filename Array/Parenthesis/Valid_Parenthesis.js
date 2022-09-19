// Leetcode: https://leetcode.com/problems/valid-parentheses/

/**
 * @param { string } s
 * @return { boolean }
*/

var isValid = function( s ) {
        let stack = [];
        let openingBrackets = {
                '(' : true,
                '[' : true,
                '{' : true
        };
        let validBrackets = {
                ')' : '(',
                ']' : '[',
                '}' : '{'
        };
    
        for( let i = 0; i < s.length; i++ ) {
                if( s[i] in openingBrackets ) {
                        stack.push( s[i] );
                } else {
                        if( stack.length > 0 && stack[ stack.length - 1 ] === validBrackets[ s[i] ] ) {
                                stack.pop();
                        } 
                        else {
                                return false;
                        }
                }
        }
    
        return stack.length > 0 ? false : true;
        
};