/*
        You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
        The digits are ordered from most significant to least significant in left-to-right order. 
        The large integer does not contain any leading 0's.
        Increment the large integer by one and return the resulting array of digits.

        Example 1:
                Input: digits = [1,2,3]
                Output: [1,2,4]
                Explanation: The array represents the integer 123.
                Incrementing by one gives 123 + 1 = 124.
                Thus, the result should be [1,2,4].
        Example 2:
                Input: digits = [4,3,2,1]
                Output: [4,3,2,2]
                Explanation: The array represents the integer 4321.
                Incrementing by one gives 4321 + 1 = 4322.
                Thus, the result should be [4,3,2,2].
        Example 3:
                Input: digits = [0]
                Output: [1]
                Explanation: The array represents the integer 0.
                Incrementing by one gives 0 + 1 = 1.
                Thus, the result should be [1].
        Example 4:
                Input: digits = [9]
                Output: [1,0]
                Explanation: The array represents the integer 9.
                Incrementing by one gives 9 + 1 = 10.
                Thus, the result should be [1,0].

        Constraints:
                1) 1 <= digits.length <= 100
                2) 0 <= digits[i] <= 9
                3) digits does not contain any leading 0's.
*/

/*
 * @param {number[]} digits
 * @return {number[]}
*/

var addStrings = function( num1, num2 ) {
        if( num2.length > num1.length ) {
                return addStrings( num2, num1 );
        }
        let carry = sum = 0;
        let answer = '';
        let j = num2.length-1;
        for( let i = num1.length-1; i>=0; i-- ){
                sum = String( +num1[i] + ( num2[j] ? +num2[j--] : 0 ) + carry );
                answer = String( +sum[sum.length-1] ) + answer;
                sum.length > 1 ? carry = +sum[0] : carry = 0;
        }
        carry > 0 ? answer = carry + answer : null;
        return answer.length > 1 && answer.startsWith("0") ? answer.slice(1): answer;
};

var plusOne = function(digits) {
        return addStrings( digits.join(""), "1").split("");
};