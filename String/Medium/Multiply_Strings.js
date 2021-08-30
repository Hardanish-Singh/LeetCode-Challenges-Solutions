/*
        Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
        Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

        Example 1:
                Input: num1 = "2", num2 = "3"
                Output: "6"
        Example 2:
                Input: num1 = "123", num2 = "456"
                Output: "56088"

        Constraints:
                1) 1 <= num1.length, num2.length <= 200
                2) num1 and num2 consist of digits only.
                3) Both num1 and num2 do not contain any leading zero, except the number 0 itself.

*/

/*
 * @param { string } num1
 * @param { string } num2
 * @return { string }
*/
var addStrings = function( num1, num2 ) {
        let carry = sum = 0;
        let answer = '';
        let j = num2.length-1;
        for( let i = num1.length-1; i>=0; i-- ){
                sum = String( +num1[i] + ( num2[j] ? +num2[j--] : 0 ) + carry );
                answer = String( +sum[sum.length-1] ) + answer;
                sum.length > 1 ? carry = +sum[0] : carry = 0;
        }
        return carry > 0 ? carry + answer : answer;
};

var multiply = function( num1, num2 ) {
        if( num2.length < num1.length ) {
                return multiply( num2, num1 );
        }
        if( [...new Set(num1.split(""))].join("") === "0" ) return "0";
        let answer = temp = '';
        let counts = carry = product = 0;
        for( let i = num1.length-1; i>=0; i-- ) {
                carry = product = 0;
                for( let j = num2.length-1; j>=0; j-- ) {
                        product = String( ( +num1[i] * +num2[j] ) + carry ) ;
                        answer = String( +product[product.length-1] ) + answer;
                        product.length > 1 ? carry = +product[0] : carry = 0 ;
                }
                if( carry > 0 ) {
                        answer = carry + answer;
                }
                for( let k=0; k<counts; k++ ){
                        answer = answer + "0";
                }
                temp = addStrings( answer, temp );
                counts++;
                answer = '';
        }
        return temp;
};