/*
        Given an integer num, repeatedly add all its digits until the result has only one digit, and return it. 

        Example 1:
                Input: num = 38
                Output: 2
                Explanation: 
                        The process is
                                38 --> 3 + 8 --> 11
                                11 --> 1 + 1 --> 2 
                                Since 2 has only one digit, return it.
        
        Example 2:
                Input: num = 0
                Output: 0

        Constraints:
                1) 0 <= num <= 2^31 - 1
*/

/*
 * @param { number } num
 * @return { number }
*/

var addDigits = function(num) {
        let sum = num;
        num = String( num );
        while( num.length > 1 ) {
                sum = 0;
                for( let i = 0; i < num.length; i++ ) {
                        sum += Number( num[i] );
                }
                num = String( sum );
        }
        return sum;
};