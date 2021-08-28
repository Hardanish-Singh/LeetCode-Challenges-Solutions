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

var multiply = function( num1, num2 ) {
        let answer = '';
        for( let i = num1.length-1; i>=0; i-- ) {
                let carry = product = 0;
                for( let j = num2.length-1; j>=0; j-- ) {
                        product = String( ( +num1[i] * +num2[j] ) + carry ) ;
                        answer = String( +product[product.length-1] ) + answer;
                        product.length > 1 ? carry = +product[0] : carry = 0 ;
                        console.log( "Answer", answer, product, carry, +num1[i], +num2[j], +num1[i] * +num2[j] );
                }
                if( carry > 0 ) {
                        answer = carry + answer;
                }
                break;
        }
        console.log(answer);
};

multiply( "123", "456" );