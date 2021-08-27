/*
 * @param { string } num1
 * @param { string } num2
 * @return { string }
*/

var addStrings = function( num1, num2 ) {
        if( num2.length > num1.length ) {
                return addStrings( num2, num1 );
        }
        let carry = sum = 0;
        let answer = '';
        let j = num2.length-1;
        for( let i = num1.length-1; i>=0; i-- ){
                sum = String( +num1[i] + ( num2[j] ? +num2[j] : 0 ) + carry );
                answer = String( +sum[sum.length-1] ) + answer;
                sum.length > 1 ? carry = +sum[0] : carry = 0;
        }
        return carry > 0 ? carry + answer : answer;
};