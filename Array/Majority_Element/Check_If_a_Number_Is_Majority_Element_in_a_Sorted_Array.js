// Leetcode: https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/

/**
 * @param { number[] } nums
 * @param { number } target
 * @return { boolean }
*/

var isMajorityElement = function( nums, target ) {
        let majority = parseInt( nums.length / 2 );
        let numbers = {
                
        };
        let index = 0;

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
                        index = i;
                }
        }

        return nums[index] === target ? true : false;
};