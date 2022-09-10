// Leetcode: https://leetcode.com/problems/majority-element-ii/

/**
 * @param { number[] } nums
 * @return { number[] }
*/

var majorityElement = function( nums ) {
        let majority = parseInt( nums.length / 3 );
        let numbers = {
                
        };
        let result = [];

        for( let i = 0; i < nums.length; i++ ) {
                let count = 0;
                if( nums[i] in numbers ) {
                        continue;
                }
                for( let j = i + 1; j < nums.length; j++ ) {
                        if( nums[i] === nums[j] ) {
                                numbers[nums[i]] = true;
                                count++;
                        }
                }
                if( count >= majority ) {
                        result.push( nums[i] );
                }
        }

        return result;
};