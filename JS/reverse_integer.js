/*
    Given a 32-bit signed integer, reverse digits of an integer.
    Example 1:
                Input: 123
                Output: 321

    Example 2:
                Input: -123
                Output: -321
    Example 3:
                Input: 120
                Output: 21
    Note:
        Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range. 
        For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

// SOLUTION 1
var reverse = function( x ) {
    if( x === 0 ) {
        return 0;
    }

    var reversedNumber = "";
    if( x < 0 ) {
        x = Math.abs( x );
        reversedNumber += '-';
    }

    while( x > 0 ) {
        let remainder = x % 10;
        reversedNumber += remainder;
        x = parseInt( x / 10 );
    }

    if( 
        parseInt( reversedNumber ) < Math.pow( 2, 31 ) * -1
            || 
        parseInt( reversedNumber ) > Math.pow( 2, 31 ) - 1
    ) {
        return 0;        
    }
    return parseInt( reversedNumber );    
};