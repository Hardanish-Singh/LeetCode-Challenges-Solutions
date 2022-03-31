/*
 * @param { string } a
 * @param { string } b
 * @return { string }
*/

var addStrings = function( num1, num2 ) {
        if( num2.length > num1.length ) {
                return addStrings( num2, num1 );
        }
        let carry = 0;
        let sum = 0;
        let answer = '';
        let j = num2.length-1;
        let temp = num2[j];
        for( let i = num1.length-1; i>=0; i-- ){
                temp = num2[j];
                if( temp == undefined ) {
                        temp = '0';
                }
                if( num1[i] === '1' && temp === '1' ) {
                        carry === 1 ? sum = String( 1 ) : sum = String( 0 );
                        carry = 1;
                } else if( 
                                ( num1[i] === '1' && temp === '0' ) 
                                        ||
                                ( num1[i] === '0' && temp === '1' )
                ) {
                        carry === 1 ? ( sum = String( 0 ), carry = 1 ) : ( sum = String( 1 ), carry = 0 );
                } else {
                        carry === 1 ? sum = String( 1 ) : sum = String( 0 );
                        carry = 0;
                }
                answer = String( +sum[sum.length-1] ) + answer;
                j = j - 1;
        }
        carry > 0 ? answer = carry + answer : null;
        return answer.length > 1 && answer.startsWith("0") ? answer.slice(1) : answer;
};

var addBinary = function(a, b) {
        return addStrings( a, b );
};