/*
        Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
        Since the result may be very large, so you need to return a string instead of an integer.

        Example 1:
                Input: nums = [10,2]
                Output: "210"
        Example 2:
                Input: nums = [3,30,34,5,9]
                Output: "9534330"

        Constraints:
                1) 1 <= nums.length <= 100
                2) 0 <= nums[i] <= 10^9
*/

/*
 * @param { number[] } nums
 * @return { string }
*/

const allEqual = nums => nums.every( n => n === 0 );

var largestNumber = function( nums ) {
        
        if( allEqual( nums ) ) {
                return '0';
        }
        
        nums.sort((a, b) => {
                const num1 = String( a ) + String( b );
                const num2 = String( b ) + String( a );
                return num1 > num2 ? -1 : 1;
        });

        return nums.join('');
};