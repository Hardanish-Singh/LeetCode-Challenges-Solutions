/*
 * @param { string } num1
 * @param { string } num2
 * @return { string }
*/

var addStrings = function( num1, num2 ) {
        if( num2.length > num1.length ) {
                return addStrings( num2, num1 );
        }
        let count = num2.length;
        while( count++ !== num1.length ) {
                num2 = "0" + num2;
        }
        let carry = sum = 0;
        let answer = '';
        for( let i = num1.length-1; i>=0; i-- ){
                sum = String( +num1[i] + ( num2[i] ? +num2[i] : 0 ) + carry );
                answer = String( +sum[sum.length-1] ) + answer;
                sum.length > 1 ? carry = +sum[0] : carry = 0;
        }
        if( carry > 0 ) {
                answer = carry + answer;
        }
        return answer;
};