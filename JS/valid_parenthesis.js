/**
 * @param { string } s
 * @return { boolean }
*/

var isValid = function( s ) {
    let stack = s.split("");
    let validBrackets = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };
    let i = 0;

    while( true ) {
        if( stack.length === 0 ) {
            return true;
        }
        if( i == stack.length ) {
            return false;
        }
        if( validBrackets.hasOwnProperty( stack[i] ) && validBrackets[ stack[i] ] === stack[i-1] ) {
            stack.splice(--i, 2);
        }
        else if( validBrackets.hasOwnProperty( stack[i] ) && validBrackets[ stack[i] ] !== stack[i-1] ) {
            return false;
        }
        else {
            i++;
        }
    }
    
};