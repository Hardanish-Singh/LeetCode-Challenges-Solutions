/*
        Given two binary strings a and b, return their sum as a binary string.  

        Example 1:
                Input: a = "11", b = "1"
                Output: "100"
        Example 2:
                Input: a = "1010", b = "1011"
                Output: "10101"
        
        Constraints:
                1) 1 <= a.length, b.length <= 10^4
                2) a and b consist only of '0' or '1' characters.
                3) Each string does not contain leading zeros except for the zero itself.
*/

/*
 * @param { string } a
 * @param { string } b
 * @return { string }
*/

var addBinary = function(a, b) {
        if( b.length > a.length ) {
                return addBinary( b, a );
        }
        let carry = 0;
        let sum = 0;
        let answer = '';
        let j = b.length-1;
        let temp = b[j];

        for( let i = a.length-1; i >= 0; i-- ) {
                temp = b[j--];
                if( temp === undefined ) {
                        temp = '0';
                }
                if( a[i] === '1' && temp === '1' ) {
                        carry === 1 ? sum = String( 1 ) : sum = String( 0 );
                        carry = 1;
                } else if(
                                ( a[i] === '1' && temp === '0' ) 
                                        ||
                                ( a[i] === '0' && temp === '1' )
                ) {
                        carry === 1 ? ( sum = String( 0 ), carry = 1 ) : ( sum = String( 1 ), carry = 0 );
                } else {
                        carry === 1 ? sum = String( 1 ) : sum = String( 0 );
                        carry = 0;
                }
                answer = String( +sum[sum.length-1] ) + answer;
        }

        carry > 0 ? answer = carry + answer : null;
        return answer.length > 1 && answer.startsWith("0") ? answer.slice(1) : answer;
};