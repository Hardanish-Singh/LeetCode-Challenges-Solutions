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
        while( count != num1.length ){
                num2 = "0" + num2;
                count++;
        }
        let carry = 0;
        let sum;
        let answer = '';
        for( let i=num1.length-1; i>=0; i-- ){
                sum = String( +num1[i] + ( num2[i] ? +num2[i] : 0 ) + carry);
                if( sum.length > 1 ) {
                        answer = String( +sum[1] ) + answer;
                        carry = +sum[0];
                } 
                else {
                        answer = String( +sum[0] ) + answer;
                        carry = 0;
                }
        }
        if( carry > 0 ) {
                answer = carry + answer;
        }
        return answer;
};