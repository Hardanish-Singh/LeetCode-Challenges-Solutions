/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
*/

var longestOnes = function( nums, k ) {
        var count = 0;
        var maxConsecutiveOnes = 0;
        var temp = 0;
        for( let i = 0; i < nums.length; i++ ) {
                if( nums[i] ) {
                        count++; 
                } else {
                        let j = i;
                        while( j != nums.length ) {
                                if( temp === k && nums[j] === 0 ) {
                                        break;
                                }
                                else if( nums[j] === 0 ) {
                                        temp++;
                                }
                                count++;
                                j++;
                        }
                        maxConsecutiveOnes = Math.max( count, maxConsecutiveOnes );
                        temp = 0;
                        count = 0;
                }
        }
        if( count > 0 ) {
                maxConsecutiveOnes = Math.max( count, maxConsecutiveOnes );
        }
        return maxConsecutiveOnes;
};