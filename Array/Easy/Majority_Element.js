// Leetcode: https://leetcode.com/problems/majority-element/

/*
 * @param { number[] } nums
 * @return { number }
*/

var majorityElement = function( nums ) {
        let majority = parseInt( nums.length / 2 );
        let numbers = {
                
        };
        let count = 0;
        let index = 0;

        for( let i = 0; i < nums.length; i++ ) {
                count = 0;
                if( nums[i] in numbers ) {
                        continue;
                }
                for( let j = i + 1; j < nums.length; j++ ){
                        if( nums[i] === nums[j] ) {
                                numbers[nums[i]] = true;
                                count++;
                        }
                }
                if( count >= majority ) {
                        index = i;
                }
        }

        return nums[index];
};